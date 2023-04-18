import Mailer from '@/services/mailer';
import { validateReCaptchaToken } from '@/services/recaptcha';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ZodError, z } from 'zod';

const schema = z
  .object({
    name: z.string().transform(v => v.trim().replace(/[\\$'"]/g, '\\$&')),
    email: z
      .string()
      .email()
      .transform(v => v.trim().replace(/[\\$'"]/g, '\\$&')),
    message: z.string().transform(v => v.trim().replace(/[\\$'"]/g, '\\$&')),
    token: z.string(),
  })
  .strict();

type MessageProps = {
  name: string;
  email: string;
  message: string;
};

const sendMessage = async ({ email, message, name }: MessageProps) => {
  const mailer = new Mailer();
  const from = process.env.MAILER_FROM as string;

  const textMessage = `Message from ${name} <${email}> \n ${message}`;
  const htmlMessage = `<p>Message from ${name} \< ${email} \></p> <p>${message}</p>`;

  return mailer.send(
    from,
    from,
    `New message from ${name} created at Portfolio`,
    textMessage,
    htmlMessage
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    await sendMessage(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json({ message: 'Invalid request', error: error.errors });
    }
    return res.status(500).end();
  }
  res.status(201).end();
}
