import Link from "next/link";
import { cookies } from "next/headers";
import "./navbar.css";

export default async function Navbar() {
  const token = (await cookies()).get("sloth-e-auth")?.value;
  const authed = Boolean(token);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        {authed && <Link href="/dashboard">Dashboard</Link>}
      </div>

      <div className="navbar-right">
        {authed ? (
          <form action="/api/auth/logout" method="post">
            <button>Logout</button>
          </form>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
