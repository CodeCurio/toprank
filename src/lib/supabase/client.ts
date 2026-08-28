import { createClient } from "@supabase/supabase-js";

function cleanEnv(val?: string) {
  if (!val) return "";
  return val.replace(/^["']|["']$/g, "").trim().replace(/\/+$/, "");
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl = cleanEnv(rawUrl) || "https://phrtgsxwgcnvyywrzkwp.supabase.co";
const supabaseAnonKey = cleanEnv(rawKey) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocnRnc3h3Z2Nudnl5d3J6a3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2NDc0ODYsImV4cCI6MjEwMzIyMzQ4Nn0.2G41Qf6DJ5IFjtVlQHHbH0cI9RtH8P-rJShFApQOUeQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
