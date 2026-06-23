import { createHash } from "crypto";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const OFFICE_COOKIE_NAME = "office_access";
const OFFICE_SESSION_SECONDS = 60 * 60 * 8;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Office",
  robots: {
    index: false,
    follow: false,
  },
};

function getOfficePassword() {
  return process.env.OFFICE_PASSWORD?.trim() ?? "";
}

function getOfficeToken() {
  const password = getOfficePassword();
  const tokenSeed = password || "office-development-password";

  return createHash("sha256").update(`office:${tokenSeed}`).digest("hex");
}

async function isOfficeAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(OFFICE_COOKIE_NAME)?.value === getOfficeToken();
}

async function logInToOffice(formData: FormData) {
  "use server";

  const honeypot = String(formData.get("website") ?? "").trim();
  const submittedPassword = String(formData.get("password") ?? "");
  const officePassword = getOfficePassword();

  if (honeypot) {
    redirect("/office");
  }

  const passwordIsValid = officePassword
    ? submittedPassword === officePassword
    : submittedPassword.trim().length > 0;

  if (!passwordIsValid) {
    redirect("/office?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(OFFICE_COOKIE_NAME, getOfficeToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: OFFICE_SESSION_SECONDS,
    path: "/office",
  });

  redirect("/office");
}

function OfficeLogin({ showError }: { showError: boolean }) {
  return (
    <section className="px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-md rounded-lg border border-theme-border bg-theme-surface p-8 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-theme-primary-deep">
            Private access
          </p>
          <h1 className="pt-3 text-3xl font-semibold text-theme-heading">
            Office
          </h1>
          <p className="pt-4 text-theme-text-muted">
            Enter the office password to continue.
          </p>
        </div>

        <form action={logInToOffice} className="mt-8 space-y-5">
          <div
            aria-hidden="true"
            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="office-website">Website</label>
            <input
              id="office-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="office-password" className="theme-form-label">
              Password
            </label>
            <input
              id="office-password"
              name="password"
              type="password"
              className="theme-form-input"
              autoComplete="current-password"
              required
            />
          </div>

          {showError ? (
            <p className="text-sm font-medium text-red-700">
              That password did not work.
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg px-5 py-3 font-semibold theme-primary-button"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}

function OfficeDashboard() {
  return (
    <section className="px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="border-b border-theme-border pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-theme-primary-deep">
            Office
          </p>
          <h1 className="pt-3 text-4xl font-semibold text-theme-heading lg:text-5xl">
            Internal workspace
          </h1>
          <p className="pt-4 max-w-2xl text-theme-text-muted">
            This private route is ready for office tools and administrative
            workflows.
          </p>
        </div>

        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {["Requests", "Estimates", "Projects"].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-theme-border bg-theme-surface p-6"
            >
              <h2 className="text-lg font-semibold text-theme-heading">
                {label}
              </h2>
              <p className="pt-2 text-sm text-theme-text-muted">
                Coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function OfficePage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const resolvedSearchParams = await (searchParams ??
    Promise.resolve<{ error?: string }>({}));
  const authenticated = await isOfficeAuthenticated();

  if (!authenticated) {
    return <OfficeLogin showError={resolvedSearchParams.error === "1"} />;
  }

  return <OfficeDashboard />;
}
