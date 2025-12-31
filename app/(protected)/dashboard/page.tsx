import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAuthToken } from "@/lib/auth/auth-edge";

type MeResponse =
  | { ok: false }
  | {
      ok: true;
      user: {
        email: string;
        role: string;
      };
    };

async function getMe(cookieHeader: string): Promise<MeResponse> {
  const res = await fetch("http://localhost:3000/api/me", {
    headers: {
      cookie: cookieHeader,
    },
    cache: "no-store",
  });

  return res.json();
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sloth-e-auth")?.value;

  const auth = verifyAuthToken(token);
  if (!auth) redirect("/login");

  const data = await getMe(cookieStore.toString());
  if (!data.ok) redirect("/login");

  const { email, role } = data.user;

  return (
    <main style={{ maxWidth: 800, margin: "64px auto" }}>
      <h1>Dashboard</h1>

      <section style={{ marginTop: 24 }}>
        <h2>Account</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Next Actions</h2>
        <ul>
          <li>Manage your account</li>
          <li>Browse the store</li>
          <li>More tools coming soon</li>
        </ul>
      </section>

      <form action="/api/auth/logout" method="post" style={{ marginTop: 40 }}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
