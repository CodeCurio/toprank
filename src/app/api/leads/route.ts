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
    const name = body.name || "Website Enquiry";
    const email = body.email || "";
    const phone = body.phone || "9115439115";
    const service = body.service || body.service_requested || "Website Development";
    const rawMessage = body.message || "Consultation Request";
    const location = body.location || body.city || "Lucknow";

    const formattedMessage = email 
      ? `Email: ${email} | ${rawMessage}`
      : rawMessage;

    const insertObj = {
      name,
      phone,
      service_requested: service,
      city: location,
      message: formattedMessage,
      status: "New"
    };

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([insertObj])
      .select()
      .maybeSingle();

    if (error) {
      console.error("API POST /api/leads error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/leads POST:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to submit lead" },
      { status: 500 }
    );
  }
}
