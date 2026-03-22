// backend/src/controllers/messagesController.ts
import { Request, Response } from 'express';
import { Resend } from 'resend';
import { supabase } from '../config/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createMessage(req: Request, res: Response): Promise<void> {
  const { name, email, message } = req.body;

  // 1. Save to Supabase
  const { error: dbError } = await supabase
    .from('messages')
    .insert({ name, email, message });

  if (dbError) {
    res.status(500).json({ error: dbError.message });
    return;
  }

  // 2. Send email via Resend
  try {
    await resend.emails.send({
      from:    'Portfolio <onboarding@resend.dev>',
      to:      process.env.YOUR_EMAIL!,
      subject: `📩 New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;">
          <h2 style="color:#c0392b;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5;padding:1rem;border-left:3px solid #c0392b;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error('Email send failed:', emailError);
  }

  res.status(201).json({ data: 'Message sent!' });
}