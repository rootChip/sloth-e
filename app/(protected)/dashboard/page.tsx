import PageShell from "@/components/layout/PageShell";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth-node";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sloth-e-auth")?.value;
  const user = verifyAuthToken(token);

  return (
    <PageShell>
      <h1>Dashboard</h1>
      {!user ? <p>Unauthorized</p> : <pre>{JSON.stringify(user, null, 2)}</pre>}
    </PageShell>
  );
}
