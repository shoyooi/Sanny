import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export async function createMessage(req: Request, res: Response): Promise<void> {
  const { error } = await supabase.from('messages').insert(req.body);
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.status(201).json({ data: 'Message sent!' });
}
