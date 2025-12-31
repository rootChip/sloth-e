export default function LoginPage() {
  return (
    <main className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <form
        method="post"
        action="/api/auth/login"
        className="space-y-4"
      >
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            className="border w-full p-2"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            className="border w-full p-2"
          />
        </div>

        <button className="border px-4 py-2 w-full">
          Sign in
        </button>
        <p style={{ marginTop: 16 }}>
  Don’t have an account? <a href="/register">Create one</a>
</p>

      </form>
    </main>
  );
}
