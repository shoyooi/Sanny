import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      console.error('Validation error:', result.error.flatten(), 'Body:', req.body);
      res.status(400).json({ error: result.error.flatten() });
      return;
    }
    req.body = result.data; // replace with sanitised data
    next();
  };
