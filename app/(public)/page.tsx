import Link from "next/link";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth/auth-edge";

export default async function HomePage() {
  const token = (await cookies()).get("sloth-e-auth")?.value;
  const authed = verifyAuthToken(token);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Sloth-E</h1>

      <Link
        href={authed ? "/dashboard" : "/login"}
        className="inline-block mt-4 border px-4 py-2"
      >
        {authed ? "Go to Dashboard" : "Sign In"}
      </Link>
    </main>
  );
}