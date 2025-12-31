export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { loginUser } from "@/lib/auth/auth-node";

export async function POST(req: Request) {
  const form = await req.formData();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const token = await loginUser(email, password);
  if (!token) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.redirect(new URL("/dashboard", req.url));
  res.cookies.set("sloth-e-auth", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  return res;
}
