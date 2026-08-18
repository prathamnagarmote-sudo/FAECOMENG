import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://powxvrkjyfwadsjsalnv.supabase.co';
const supabaseAnonKey = 'sb_publishable_nr5DQXr8Ac6QDVmOOOg05Q_tO2U0lyt';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data, error } = await supabase.from('blogs').select('*');
  console.log("Data:", data);
}
check();
