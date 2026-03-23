// backend/src/controllers/messagesController.ts
import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export async function createMessage(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, message } = req.body;
    console.log('Received message from:', name);

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('messages')
      .insert({ name, email, message });

    if (dbError) {
      console.error('Database error:', dbError);
      res.status(500).json({ error: 'Failed to save message' });
      return;
    }

    console.log('Message saved to database');

    // 2. Send email via Resend (optional, non-blocking)
    const resendApiKey = process.env.RESEND_API_KEY;
    const yourEmail = process.env.YOUR_EMAIL;
    
    if (resendApiKey && yourEmail) {
      try {
        console.log('Attempting to send email to:', yourEmail);
        
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'noreply@sanzportfolio.com',
            to: yourEmail,
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
          }),
        });
        
        const data = await response.json() as { id?: string; message?: string };
        if (response.ok) {
          console.log('Email sent successfully, ID:', data.id);
        } else {
          console.error('Email send error:', data.message);
        }
      } catch (emailError: any) {
        console.error('Email send exception:', emailError?.message || emailError);
      }
    } else {
      console.warn('Email service not configured (missing RESEND_API_KEY or YOUR_EMAIL)');
    }

    res.status(201).json({ data: 'Message sent!' });
  } catch (error) {
    console.error('Unexpected error in createMessage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}