import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export function requireAdmin(request: Request) {
  const token = request.headers.get("x-admin-token");
  return Boolean(process.env.ADMIN_API_TOKEN && token === process.env.ADMIN_API_TOKEN);
}
