import { db } from "./db";

export type User = {
  id: string;
  email: string;
  role: string;
};

export async function getUserById(userId: string): Promise<User | null> {
  const result = await db.query(
    `
    SELECT id, email, role
    FROM users
    WHERE id = $1
    `,
    [userId]
  );

  if (result.rowCount === 0) return null;
  return result.rows[0];
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await db.query(
    `
    SELECT id, email, role
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  if (result.rowCount === 0) return null;
  return result.rows[0];
}

export async function setUserRole(userId: string, role: string): Promise<void> {
  await db.query(
    `
    UPDATE users
    SET role = $2
    WHERE id = $1
    `,
    [userId, role]
  );
}
