import { NextResponse } from "next/server";
import { db } from "@/lib/data/db";

export async function GET() {
  const result = await db.query(
    `
    SELECT id, name, description, price_cents
    FROM products
    WHERE active = true
    ORDER BY created_at DESC
    `
  );

  return NextResponse.json({
    ok: true,
    products: result.rows,
  });
}
