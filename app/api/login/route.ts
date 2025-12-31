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

  const result = await db.query(
    "SELECT id, password_hash FROM users WHERE email = $1",
    [email]
  );

  if ((result.rowCount ?? 0) === 0) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = signAuthToken({ userId: user.id });

  const res = NextResponse.json({ ok: true });

  res.cookies.set("sloth-e-auth", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
