import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Sloth-E internal operations panel
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/dashboard/employees"
          className="border rounded p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold">Employees</h2>
          <p className="text-sm text-gray-500">
            View and manage internal users
          </p>
        </Link>

        <Link
          href="/store"
          className="border rounded p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold">Store</h2>
          <p className="text-sm text-gray-500">
            Public storefront and products
          </p>
        </Link>

        <Link
          href="/dashboard/settings"
          className="border rounded p-4 hover:bg-gray-50"
        >
          <h2 className="font-semibold">Settings</h2>
          <p className="text-sm text-gray-500">
            Account and system configuration
          </p>
        </Link>
      </section>
    </main>
  );
}
