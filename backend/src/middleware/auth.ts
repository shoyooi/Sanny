import { Request, Response, NextFunction } from 'express';

/**
 * Authentication middleware
 * Validates requests for protected routes
 */
export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  // For portfolio backend, we can implement basic auth checks here
  // This is a placeholder for authentication logic
  
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    res.status(401).json({ error: 'Unauthorized - missing authorization header' });
    return;
  }

  // Basic token validation (you can expand this)
  const token = authHeader.split(' ')[1];
  
  if (!token) {
    res.status(401).json({ error: 'Unauthorized - invalid token format' });
    return;
  }

  // Continue to next middleware/route handler
  next();
};
