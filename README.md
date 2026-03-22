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
