import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env');

// Service role key — backend only, never expose to browser
export const supabase = createClient(url, key);
