import bcrypt from "bcrypt";
import { db } from "@/lib/data/db";
import { signAuthToken } from "./crypto";

export async function loginUser(email: string, password: string) {
  const result = await db.query(
    "SELECT id, password_hash, role FROM users WHERE email = $1",
    [email]
  );

  if (result.rowCount === 0) return null;

  const user = result.rows[0];
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return null;

  return signAuthToken({
    userId: user.id,
  });
}
