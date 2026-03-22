import { Router } from 'express';
<<<<<<< HEAD
import { getProjects, createProject } from '../controllers/projectsController';

const router = Router();
router.get('/',  getProjects);
router.post('/', createProject);
=======
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';
import { getProjects, createProject } from '../controllers/projectsController';

const router = Router();

/**
 * Schema for creating/updating projects
 * All fields are validated and sanitized
 */
const ProjectSchema = z.object({
  title: z.string().min(1).max(255).trim(),
  description: z.string().min(10).max(2000).trim(),
  image_url: z.string().url().nullable(),
  link: z.string().url().nullable(),
  category: z.enum(['graphic', 'video', 'logo']),
  year: z.number().int().min(2000).max(new Date().getFullYear() + 1),
});

router.get('/', getProjects);
router.post('/', authenticate, validate(ProjectSchema), createProject);

>>>>>>> main
export default router;
