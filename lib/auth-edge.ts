import type { NextRequest } from "next/server";

export function isEdgeAuthenticated(request: NextRequest) {
  // Edge can ONLY check presence, not signature
  const token = request.cookies.get("sloth-e-auth")?.value;
  return Boolean(token);
}