import technologiesData from '@/data/technologies';
import ResumeGenerator from '@/services/resume-generator';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const schema = z.object({
  skills: z.array(z.string()),
  email: z.string(),
  company: z.string().optional(),
  add_gdpr_statement: z.boolean().optional(),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({
      error: { message: `Method ${method} Not Allowed` },
    });
  }

  const validation = schema.safeParse(req.body);
  if (!validation.success) {
    const { errors } = validation.error;

    return res.status(400).json({
      error: { message: 'Invalid request', errors },
    });
  }

  const resume = new ResumeGenerator();
  const getDefaultSkills = (): string[] => {
    return technologiesData
      .filter(technology => technology.preference === 5)
      .map(skill => skill.name);
  };

  const { skills, email, add_gdpr_statement, company } = validation.data;

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
}
