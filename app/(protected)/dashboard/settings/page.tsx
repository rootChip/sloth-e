export default function SettingsPage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Settings</h1>

      <section>
  <h2>Session</h2>

  <form action="/api/auth/logout" method="post">
    <button type="submit">Log out</button>
  </form>
</section>
    </main>
  );
}
