import Mailer from '@/services/mailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

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

  const validation = schema.safeParse(req.body);
  if (!validation.success) {
    const { errors } = validation.error;

    return res.status(400).json({
      error: { message: 'Invalid request', errors },
    });
  }

  const { email, message, name } = validation.data;

  const mailer = new Mailer();
  const from = process.env.MAILER_FROM as string;

  const textMessage = `Message from ${name} <${email}> \n ${message}`;
  const htmlMessage = `<p>Message from ${name} \< ${email} \></p> <p>${message}</p>`;

  try {
    await mailer.send(
      from,
      from,
      `New message from ${name} created at Portfolio`,
      textMessage,
      htmlMessage
    );
  } catch (error) {}
  res.status(201).end();
}
