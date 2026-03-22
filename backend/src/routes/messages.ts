import { Router } from 'express';
import { z } from 'zod';
import { validate }      from '../middleware/validate';
import { createMessage } from '../controllers/messagesController';

const router = Router();

const MessageSchema = z.object({
  name:    z.string().min(2).max(100).trim(),
  email:   z.string().email().trim(),
  message: z.string().min(3).max(2000).trim(),
});

router.post('/', validate(MessageSchema), createMessage);
export default router;
