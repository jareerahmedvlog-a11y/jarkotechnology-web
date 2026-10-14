import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "jarcode_admin_session";
const SESSION_DAYS = 7;

function adminEmail() {
  return (process.env.ADMIN_EMAIL || "jareer@admin.com").trim().toLowerCase();
}

function adminPassword() {
  return process.env.ADMIN_PASSWORD || "jareer1234";
}

function sessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    `jarcode-admin-${adminEmail()}-${adminPassword()}`
  );
}

function sign(value: string) {
  return createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function validateAdminCredentials(email: string, password: string) {
  const okEmail = safeEqual(email.trim().toLowerCase(), adminEmail());
  const okPassword = safeEqual(password, adminPassword());
  return okEmail && okPassword;
}

export function createSessionToken(email: string) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `${email.trim().toLowerCase()}|${exp}`;
  return `${payload}|${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null) {
  if (!token) return false;
  const parts = token.split("|");
  if (parts.length !== 3) return false;
  const [email, expRaw, signature] = parts;
  const payload = `${email}|${expRaw}`;
  if (!safeEqual(sign(payload), signature)) return false;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  return email === adminEmail();
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE_NAME)?.value);
}

export function sessionCookieOptions(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}

export function clearSessionCookieOptions() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  };
}

export { COOKIE_NAME };
