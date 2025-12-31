import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const token = (await cookies()).get("sloth-e-auth")?.value;
  const authed = Boolean(token);

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/store">Store</Link>

      {authed ? (
        <form action="/api/auth/logout" method="post">
          <button>Logout</button>
        </form>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}
