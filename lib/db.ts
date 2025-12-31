import { Pool } from "pg";

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

if (
  !POSTGRES_HOST ||
  !POSTGRES_PORT ||
  !POSTGRES_DB ||
  !POSTGRES_USER ||
  !POSTGRES_PASSWORD
) {
  throw new Error("PostgreSQL env vars not loaded");
}

export const db = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});
