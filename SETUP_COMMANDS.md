# Setup Commands — Run These In Order

## ─────────────────────────────────────────
## STEP 1 · Prerequisites (run once ever)
## ─────────────────────────────────────────

# Install Node.js (v20 LTS recommended)
# → https://nodejs.org/en/download  (use installer for Windows/Mac)
# Or via nvm (Mac/Linux):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20 && nvm use 20

# Verify
node -v   # should print v20.x.x
npm -v    # should print 10.x.x

# Install Git
# → https://git-scm.com/downloads


## ─────────────────────────────────────────
## STEP 2 · Clone / init the project
## ─────────────────────────────────────────

# Option A — if you already have the folder (unzipped from this file):
cd portfolio

# Option B — fresh Git repo:
git init
git add .
git commit -m "init: portfolio scaffold"


## ─────────────────────────────────────────
## STEP 3 · Frontend setup
## ─────────────────────────────────────────

cd frontend

# Install all dependencies
npm install

# Install Tailwind (if not already in package.json)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create the CSS entry file  (copy this content into src/index.css)
# See "index.css content" section below


## ─────────────────────────────────────────
## STEP 4 · Backend setup
## ─────────────────────────────────────────

cd ../backend

npm install


## ─────────────────────────────────────────
## STEP 5 · Configure .env files
## ─────────────────────────────────────────

# frontend/.env  ← already created, no changes needed for local dev

# backend/.env  ← EDIT THIS with your real Supabase values:
#   SUPABASE_URL=https://xxxx.supabase.co
#   SUPABASE_SERVICE_KEY=eyJ...   ← from Supabase → Project Settings → API


## ─────────────────────────────────────────
## STEP 6 · Supabase — create tables
## ─────────────────────────────────────────

# Go to https://supabase.com → New Project → SQL Editor
# Run this SQL:

CREATE TABLE projects (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  description text,
  image_url   text,
  link        text,
  category    text CHECK (category IN ('graphic','video','logo')),
  year        int  DEFAULT 2025,
  created_at  timestamptz DEFAULT now()
);

CREATE TABLE messages (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  email      text NOT NULL,
  message    text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read projects"    ON projects FOR SELECT USING (true);
CREATE POLICY "Anyone can send message" ON messages FOR INSERT WITH CHECK (true);


## ─────────────────────────────────────────
## STEP 7 · Run dev servers
## ─────────────────────────────────────────

# Open TWO terminals:

# Terminal 1 — Backend (port 4000)
cd portfolio/backend
npm run dev

# Terminal 2 — Frontend (port 5173)
cd portfolio/frontend
npm run dev

# Open browser: http://localhost:5173


## ─────────────────────────────────────────
## STEP 8 · Build for production
## ─────────────────────────────────────────

# Frontend — creates dist/ folder
cd frontend
npm run build

# Backend — compiles TS → dist/
cd ../backend
npm run build
npm start          # runs compiled JS


## ─────────────────────────────────────────
## STEP 9 · Deploy
## ─────────────────────────────────────────

# ── Frontend → Vercel ──────────────────────
npm install -g vercel
cd frontend
vercel --prod
# Set VITE_API_URL=https://your-backend.onrender.com/api  in Vercel dashboard

# ── Backend → Render ───────────────────────
# 1. Push repo to GitHub
# 2. render.com → New Web Service → connect repo
# 3. Root directory:  backend
# 4. Build command:   npm install && npm run build
# 5. Start command:   node dist/index.js
# 6. Add env vars:    SUPABASE_URL, SUPABASE_SERVICE_KEY, FRONTEND_URL, PORT


## ─────────────────────────────────────────
## index.css content (paste into frontend/src/index.css)
## ─────────────────────────────────────────

# @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Mono:ital,wght@0,400;1,300&display=swap');
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
# 
# /* Paste the full CSS from the original index.html <style> block here */


## ─────────────────────────────────────────
## Useful npm scripts reference
## ─────────────────────────────────────────

# frontend/
#   npm run dev      → start Vite dev server  (hot-reload)
#   npm run build    → compile + bundle → dist/
#   npm run preview  → preview the production build locally

# backend/
#   npm run dev      → ts-node with nodemon  (auto-restart on save)
#   npm run build    → tsc → dist/
#   npm start        → node dist/index.js    (production)
