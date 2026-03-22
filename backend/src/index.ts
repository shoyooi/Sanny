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
  /vercel\.app$/, // Allow all Vercel deployments
].filter(Boolean);

app.use(cors({ 
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
