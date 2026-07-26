import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wxdbburfdxkqmxmmexbi.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZGJidXJmZHhrcW14bW1leGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwODg5NTcsImV4cCI6MjEwMDY2NDk1N30.vvIovJNoi7-zfOPyWyw9wDa-tY6cnpyEFTbKYgMI1NQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
