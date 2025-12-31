export default function RegisterPage() {
  return (
    <main style={{ maxWidth: 420, margin: "80px auto" }}>
      <h1>Create Account</h1>

      <form method="post" action="/api/auth/register">
        <label>Email</label>
        <input
  type="email"
  name="email"
  minLength={5}
  maxLength={255}
  required
/>

        <label>Password</label>
        <input
  type="password"
  name="password"
  minLength={8}
  maxLength={72}
  required
/>

        <button type="submit">Create account</button>
      </form>

      <p style={{ marginTop: 16 }}>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </main>
  );
}
