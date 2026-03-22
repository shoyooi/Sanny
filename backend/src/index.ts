import express from 'express';
import cors    from 'cors';
import dotenv  from 'dotenv';
import projectsRouter from './routes/projects';
import messagesRouter from './routes/messages';

dotenv.config();

const app  = express();
const PORT = process.env.PORT ?? 4000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean);

app.use(cors({ 
  origin: (origin, callback) => {
    // Allow requests without origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    // Check exact matches
    if (allowedOrigins.includes(origin)) return callback(null, true);
    
    // Check Vercel deployments
    if (/\.vercel\.app$/.test(origin)) return callback(null, true);
    
    callback(new Error('CORS blocked'));
  },
  credentials: true
}));
app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
