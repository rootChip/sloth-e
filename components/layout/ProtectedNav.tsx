import Link from "next/link";

export default function ProtectedNav() {
  return (
    <nav className="protected-nav">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}
