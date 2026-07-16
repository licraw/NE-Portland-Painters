import { createHash } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const OFFICE_COOKIE_NAME = "office_access";
export const OFFICE_SESSION_SECONDS = 60 * 60 * 8;

export function getOfficePassword() {
  return process.env.OFFICE_PASSWORD?.trim() ?? "";
}

export function getOfficeToken() {
  const password = getOfficePassword();
  const tokenSeed = password || "office-development-password";

  return createHash("sha256").update(`office:${tokenSeed}`).digest("hex");
}

export async function isOfficeAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(OFFICE_COOKIE_NAME)?.value === getOfficeToken();
}

export function getSafeOfficeNextPath(value?: string | null) {
  const isOfficePath =
    value === "/office" ||
    value?.startsWith("/office/") ||
    value?.startsWith("/office?");

  if (!value || !isOfficePath || value.startsWith("//")) {
    return "/office";
  }

  return value;
}

export function getOfficeLoginPath(nextPath?: string | null) {
  const safeNextPath = getSafeOfficeNextPath(nextPath);

  if (safeNextPath === "/office") {
    return "/office";
  }

  return `/office?next=${encodeURIComponent(safeNextPath)}`;
}

export async function requireOfficeAuth(nextPath?: string) {
  const authenticated = await isOfficeAuthenticated();

  if (!authenticated) {
    redirect(getOfficeLoginPath(nextPath));
  }
}
