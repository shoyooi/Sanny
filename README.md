<<<<<<< HEAD
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

- **Frontend** → Vercel: `cd frontend && vercel --prod`
- **Backend**  → Render: connect repo, set env vars, build = `npm run build`, start = `npm start`
=======
# Portfolio 2025 — Sanny Sabio

## Quick Start

### Install
```bash
cd frontend && npm install
cd ../backend && npm install
```

### Configure backend/.env
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
FRONTEND_URL=http://localhost:5173
```

### Run
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```
Open http://localhost:5173

## Add your images
- Portrait: `frontend/public/portrait.jpg`
- Projects: `frontend/public/projects/p1.jpg` … `p9.jpg`
- Previous portfolios: `frontend/public/prev-2023.jpg`, `prev-2024.jpg`

## Deploy
- Frontend → Vercel: `cd frontend && vercel --prod`
- Backend  → Render: connect repo, build: `npm run build`, start: `node dist/index.js`
>>>>>>> main
