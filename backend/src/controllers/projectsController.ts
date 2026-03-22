import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export async function getProjects(_req: Request, res: Response): Promise<void> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

<<<<<<< HEAD
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json({ data });
}

// POST — protect with auth middleware in production
=======
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json({ data });
}

/**
 * Create a new project
 * Requires authentication and validated input (see routes/projects.ts for schema)
 * Input is sanitized by validate middleware before reaching this handler
 */
>>>>>>> main
export async function createProject(req: Request, res: Response): Promise<void> {
  const { data, error } = await supabase
    .from('projects')
    .insert(req.body)
    .select()
    .single();

<<<<<<< HEAD
  if (error) { res.status(500).json({ error: error.message }); return; }
=======
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
>>>>>>> main
  res.status(201).json({ data });
}
