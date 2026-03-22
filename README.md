# Portfolio 2025 — Sanz

A full-stack portfolio built with React + TypeScript (frontend) and Node.js + Express + TypeScript (backend), powered by Supabase.

## Quick Start

### 1. Clone & install

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 2. Configure environment

```bash
# frontend/.env
VITE_API_URL=http://localhost:4000/api

# backend/.env
PORT=4000
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
FRONTEND_URL=http://localhost:5173
```

### 3. Run dev servers

```bash
# Terminal 1 — backend
cd backend && npm run dev

# Terminal 2 — frontend
cd frontend && npm run dev
```

Open http://localhost:5173

## Deploy

- **Frontend** → Vercel: Set `VITE_API_URL` env var to your Railway backend URL
- **Backend** → Railway: Connected to this repo with auto-deploy

## Environment Variables

**Vercel (Frontend)**
```
VITE_API_URL=https://your-railway-backend-url.railway.app
```

**Railway (Backend)**
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
FRONTEND_URL=https://your-vercel-domain.vercel.app
RESEND_API_KEY=your-resend-key
YOUR_EMAIL=your-email@domain.com
```
