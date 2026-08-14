import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://powxvrkjyfwadsjsalnv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_nr5DQXr8Ac6QDVmOOOg05Q_tO2U0lyt';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client-side Supabase instance (using public publishable/anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin/Server Supabase instance (safely initialized if service role key exists)
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : supabase;
