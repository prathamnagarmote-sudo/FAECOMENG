-- ════════════════════════════════════════════════════════════════
-- FAECOM SUPABASE DATABASE SETUP SCRIPT
-- Copy and paste this into Supabase SQL Editor and click RUN
-- ════════════════════════════════════════════════════════════════

-- 1. Create Projects Table
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

-- 2. Create Blogs Table
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

-- 3. Enable Row Level Security (RLS) & Public Policies
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public projects access" ON public.projects;
CREATE POLICY "Public projects access" ON public.projects FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public blogs access" ON public.blogs;
CREATE POLICY "Public blogs access" ON public.blogs FOR ALL USING (true) WITH CHECK (true);

-- 4. Create Public Storage Bucket for Image Uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-media', 'project-media', true) 
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public media storage" ON storage.objects;
CREATE POLICY "Public media storage" ON storage.objects FOR ALL USING (bucket_id = 'project-media') WITH CHECK (bucket_id = 'project-media');
