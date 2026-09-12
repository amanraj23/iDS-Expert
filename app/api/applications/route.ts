import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { rateLimit } from "@/lib/rateLimit";
import { applicationRequestSchema } from "@/lib/validations";
import { ApplicationRequest } from "@/models/ApplicationRequest";

function referenceNumber() {
  return `IDS-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "local";
  if (!rateLimit(`application:${ip}`)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json();
  const parsed = applicationRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request details." }, { status: 400 });
  }

  try {
    await connectMongo();
    const created = await ApplicationRequest.create({
      ...parsed.data,
      referenceNumber: referenceNumber(),
      email: parsed.data.email || undefined
    });
    return NextResponse.json({ referenceNumber: created.referenceNumber }, { status: 201 });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ error: error instanceof Error ? error.message : "Database error" }, { status: 500 });
    }
    return NextResponse.json({ error: "Could not submit request." }, { status: 500 });
  }
}
