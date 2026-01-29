import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mzxarerriheniciasbrv.supabase.co';
const supabaseKey = 'sb_publishable_wmUA_qoZ4NoLln1XKdYc0Q_2JMJq7-4';
export const supabase = createClient(supabaseUrl, supabaseKey);
