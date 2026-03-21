import { Router } from 'express';
import { getProjects, createProject } from '../controllers/projectsController';

const router = Router();
router.get('/',  getProjects);
router.post('/', createProject);
export default router;
