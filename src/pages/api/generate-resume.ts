import technologiesData from '@/data/technologies';
import { validateReCaptchaToken } from '@/services/recaptcha';
import ResumeGenerator from '@/services/resume-generator';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ZodError, z } from 'zod';

const schema = z
  .object({
    skills: z.array(z.string()),
    email: z.string(),
    token: z.string(),
    company: z.string().optional(),
    add_gdpr_statement: z.boolean().optional(),
  })
  .strict();

const getDefaultSkills = (): string[] => {
  return technologiesData
    .filter(technology => technology.preference === 5)
    .map(skill => skill.name);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({
      error: { message: `Method ${method} Not Allowed` },
    });
  }
  try {
    const data = schema.parse(req.body);
    const isTokenValid = validateReCaptchaToken(data.token);
    if (!isTokenValid) {
      return res.status(400).json({ message: 'Ding dong! Are you a robot?' });
    }
    const resume = new ResumeGenerator();

    const { skills, email, add_gdpr_statement, company } = data;

    const doc = resume.generate({
      skills: skills || getDefaultSkills(),
      addGDPRRegulations: add_gdpr_statement,
      company: company,
      generatedBy: email,
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=luke_wawrzyniak-resume.pdf'
    );
    res.send(doc);
    doc.end();
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json({ message: 'Invalid request', error: error.errors });
    }
    return res.status(500).end();
  }
}
