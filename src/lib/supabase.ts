import { createClient } from '@supabase/supabase-js';

// The URL should not include '/rest/v1/' at the end for the JS client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL.replace('/rest/v1/', '');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
