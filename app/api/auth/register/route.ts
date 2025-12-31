import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/data/db";
import { signAuthToken } from "@/lib/auth/crypto";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;

  if (!email || !password) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const existing = await db.query(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );

  if ((existing.rowCount ?? 0) > 0) {
    return NextResponse.json({ ok: false }, { status: 409 });
  }

  const hash = await bcrypt.hash(password, 10);

  const result = await db.query(
    `
    INSERT INTO users (id, email, password_hash, role)
    VALUES (gen_random_uuid(), $1, $2, 'customer')
    RETURNING id
    `,
    [email, hash]
  );
  
 if (password.length < 8 || password.length > 72) {
  return NextResponse.json(
    { ok: false, error: "Password must be 8–72 characters" },
    { status: 400 }
  );
}

if (email.length < 5 || email.length > 255) {
  return NextResponse.json(
    { ok: false, error: "Invalid email length" },
    { status: 400 }
  );
}

  const token = signAuthToken({ userId: result.rows[0].id });

const res = NextResponse.redirect(new URL("/", req.url));
  res.cookies.set("sloth-e-auth", token, {
    httpOnly: true,
    path: "/",
  });

 

  return res;
}
