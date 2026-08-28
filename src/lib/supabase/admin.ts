import { createClient } from "@supabase/supabase-js";

function cleanEnv(val?: string) {
  if (!val) return "";
  return val.replace(/^["']|["']$/g, "").trim().replace(/\/+$/, "");
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const rawServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseUrl = cleanEnv(rawUrl) || "https://phrtgsxwgcnvyywrzkwp.supabase.co";
const supabaseServiceKey = cleanEnv(rawServiceKey) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocnRnc3h3Z2Nudnl5d3J6a3dwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzY0NzQ4NiwiZXhwIjoyMTAzMjIzNDg2fQ.uuVFP5SHT31YrJxBqmD6gItFQac7bLcOvVoA1B9MFJ8";

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
