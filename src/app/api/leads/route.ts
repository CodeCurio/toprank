import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("API GET /api/leads error:", error);
      return NextResponse.json({ data: [] });
    }

    return NextResponse.json({ data: data || [] });
  } catch (err: any) {
    console.error("Unexpected error in /api/leads GET:", err);
    return NextResponse.json({ data: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, location } = body;

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([
        {
          name: name || "",
          email: email || "",
          phone: phone || "",
          service: service || "",
          message: message || "",
          location: location || "",
          status: "New",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("API POST /api/leads error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/leads POST:", err);
    return NextResponse.json(
      { error: err.message || "Failed to submit lead" },
      { status: 500 }
    );
  }
}
