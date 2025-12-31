export default function RegisterPage() {
  return (
    <form
      method="post"
      action="/api/auth/register"
      className="max-w-sm mx-auto mt-24 flex flex-col gap-4"
    >
      <h1>Create Account</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
