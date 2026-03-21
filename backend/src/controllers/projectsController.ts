import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export async function getProjects(_req: Request, res: Response): Promise<void> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json({ data });
}

// POST — protect with auth middleware in production
export async function createProject(req: Request, res: Response): Promise<void> {
  const { data, error } = await supabase
    .from('projects')
    .insert(req.body)
    .select()
    .single();

  if (error) { res.status(500).json({ error: error.message }); return; }
  res.status(201).json({ data });
}
