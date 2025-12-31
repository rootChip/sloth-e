import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "./secrets";

export function signAuthToken(payload: { userId: string }) {
  return jwt.sign(payload, AUTH_SECRET, { expiresIn: "7d" });
}

export function verifyAuthToken(token?: string) {
  if (!token) return null;
  try {
    return jwt.verify(token, AUTH_SECRET) as { userId: string };
  } catch {
    return null;
  }
}
