import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4 space-y-4">
        <h2 className="font-bold text-lg">Sloth-E</h2>

        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/employees">Employees</Link>
          <Link href="/store">Store</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
