import { createClient } from '@supabase/supabase-js';
import { ALL_PROJECTS } from '../app/projects/page.js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://powxvrkjyfwadsjsalnv.supabase.co';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, serviceKey);

async function main() {
  console.log('Testing connection to Supabase...');
  console.log('URL:', supabaseUrl);

  // Check if projects table exists
  const { data, error } = await supabase.from('projects').select('count', { count: 'exact', head: true });
  
  if (error) {
    console.log('Projects table response:', error.message);
    console.log('\n--- SQL TO RUN IN SUPABASE SQL EDITOR ---');
    console.log(`
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  category TEXT NOT NULL,
  tag TEXT,
  area TEXT,
  storeys TEXT,
  type TEXT,
  image TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT,
  author TEXT,
  date TEXT,
  read_time TEXT,
  cover_img TEXT,
  excerpt TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public insert projects" ON public.projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update projects" ON public.projects FOR UPDATE USING (true);
CREATE POLICY "Public delete projects" ON public.projects FOR DELETE USING (true);

CREATE POLICY "Public read blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Public insert blogs" ON public.blogs FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update blogs" ON public.blogs FOR UPDATE USING (true);
CREATE POLICY "Public delete blogs" ON public.blogs FOR DELETE USING (true);
    `);
  } else {
    console.log('Projects table exists! Current count:', data);
  }
}

main().catch(console.error);
