import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function cleanEnv(val?: string) {
  if (!val) return "";
  return val.replace(/^["']|["']$/g, "").trim().replace(/\/+$/, "");
}

export async function POST(request: Request) {
  try {
    const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabaseUrl = cleanEnv(rawUrl) || "https://wxdbburfdxkqmxmmexbi.supabase.co";
    const supabaseAnonKey = cleanEnv(rawKey) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZGJidXJmZHhrcW14bW1leGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwODg5NTcsImV4cCI6MjEwMDY2NDk1N30.vvIovJNoi7-zfOPyWyw9wDa-tY6cnpyEFTbKYgMI1NQ";

    // Validate URL format
    if (!supabaseUrl.startsWith("http://") && !supabaseUrl.startsWith("https://")) {
      return NextResponse.json(
        { 
          error: `Invalid Supabase URL format (${supabaseUrl}). It must start with https:// and look like https://your-project-ref.supabase.co` 
        },
        { status: 400 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    // Return session data to set in browser client
    return NextResponse.json({
      user: data.user,
      session: data.session,
    });
  } catch (err: any) {
    console.error("Auth login API route error:", err);
    
    let userFriendlyMsg = err.message || "Failed to connect to Supabase";
    if (err.message?.includes("fetch failed") || err.cause?.message?.includes("fetch failed")) {
      const urlUsed = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_URL);
      userFriendlyMsg = `Unable to connect to Supabase URL (${urlUsed || "not configured"}). Please verify NEXT_PUBLIC_SUPABASE_URL in .env.local matches your Project URL (https://xxxx.supabase.co).`;
    }

    return NextResponse.json(
      { error: userFriendlyMsg },
      { status: 500 }
    );
  }
}
