import { createHmac } from "crypto";
import { AUTH_SECRET } from "./secrets";

function sign(value: string) {
  return createHmac("sha256", AUTH_SECRET)
    .update(value)
    .digest("hex");
}

export function verifyAuthToken(token?: string) {
  if (!token) return null;
  const [userId, signature] = token.split(".");
  if (!userId || !signature) return null;
  if (sign(userId) !== signature) return null;
  return { userId };
}