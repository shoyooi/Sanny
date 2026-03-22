// backend/src/controllers/messagesController.ts
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
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

    // 2. Send email via Gmail SMTP (optional, non-blocking)
    const yourEmail = process.env.YOUR_EMAIL;
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (yourEmail && gmailUser && gmailAppPassword) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailAppPassword,
          },
        });
        
        console.log('Attempting to send email to:', yourEmail);
        
        const mailOptions = {
          from: gmailUser,
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
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully, ID:', info.messageId);
      } catch (emailError: any) {
        console.error('Email send exception:', emailError?.message || emailError);
      }
    } else {
      console.warn('Email service not configured (missing YOUR_EMAIL, GMAIL_USER, or GMAIL_APP_PASSWORD)');
    }

    res.status(201).json({ data: 'Message sent!' });
  } catch (error) {
    console.error('Unexpected error in createMessage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}