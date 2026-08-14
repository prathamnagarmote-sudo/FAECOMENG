const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.from('projects').select('*');
  console.log('Error:', error);
  console.log('Count:', data ? data.length : 0);
  if (data && data.length > 0) {
    console.log('Sample image:', data[0].image);
  }
}
run();
