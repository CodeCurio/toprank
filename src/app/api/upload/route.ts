import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import path from "path";
import fs from "fs/promises";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
    }

    // Max 15MB
    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json({ error: "File size exceeds 15MB limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".png";
    const sanitizedBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueFileName = `${Date.now()}_${sanitizedBase}${ext}`;

    // 1. Save directly to public/uploads directory (Guaranteed 100% reliable local/static serving)
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });
    const filePath = path.join(uploadsDir, uniqueFileName);
    await fs.writeFile(filePath, buffer);

    const localUrl = `/uploads/${uniqueFileName}`;

    // 2. Also background upload to Supabase Storage Bucket for remote persistence
    try {
      const bucketName = "portfolio-images";
      const { data: buckets } = await supabaseAdmin.storage.listBuckets();
      const bucketExists = buckets?.some((b) => b.name === bucketName);

      if (!bucketExists) {
        await supabaseAdmin.storage.createBucket(bucketName, {
          public: true,
          fileSizeLimit: 15728640,
        });
      }

      await supabaseAdmin.storage
        .from(bucketName)
        .upload(uniqueFileName, buffer, {
          contentType: file.type,
          upsert: true,
        });
    } catch (storageErr) {
      console.warn("Background Supabase storage backup note:", storageErr);
    }

    return NextResponse.json({
      success: true,
      url: localUrl,
      fileName: uniqueFileName,
    });
  } catch (err: any) {
    console.error("Upload API route error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process image upload" },
      { status: 500 }
    );
  }
}
