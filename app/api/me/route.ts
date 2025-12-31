import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth/auth-edge";
import { getUserById } from "@/lib/data/users";

export async function GET() {
  const token = (await cookies()).get("sloth-e-auth")?.value;
  const auth = verifyAuthToken(token);

  if (!auth) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const user = await getUserById(auth.userId);

  if (!user) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
}