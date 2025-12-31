export type Role =
  | "security_head"
  | "director"
  | "admin"
  | "employee"
  | "affiliate"
  | "customer";

export const ROLE_RANK: Record<Role, number> = {
  security_head: 100,
  director: 90,
  admin: 80,
  employee: 50,
  affiliate: 20,
  customer: 10,
};

export function isSovereign(role?: Role) {
  return role === "security_head" || role === "director";
}

export function isAdminOrHigher(role?: Role) {
  return role === "admin" || isSovereign(role);
}

export function requiresMultiSig(newRole: Role) {
  // Any non-admin role change requires ≥2 signers unless sovereign initiates
  return newRole !== "admin" && newRole !== "security_head" && newRole !== "director";
}
