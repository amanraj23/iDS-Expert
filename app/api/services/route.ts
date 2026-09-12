import { NextResponse } from "next/server";
import { services } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    services: services.map((service) => ({
      title: service.title,
      slug: service.slug,
      description: service.description
    }))
  });
}
