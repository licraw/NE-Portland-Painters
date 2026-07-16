import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getOfficeLoginPath,
  getOfficePassword,
  getSafeOfficeNextPath,
  getOfficeToken,
  isOfficeAuthenticated,
  OFFICE_COOKIE_NAME,
  OFFICE_SESSION_SECONDS,
} from "./_lib/auth";
import { officeProjects } from "./projects/projectData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Office",
  robots: {
    index: false,
    follow: false,
  },
};

async function logInToOffice(formData: FormData) {
  "use server";

  const honeypot = String(formData.get("website") ?? "").trim();
  const submittedPassword = String(formData.get("password") ?? "");
  const nextPath = getSafeOfficeNextPath(String(formData.get("next") ?? ""));
  const officePassword = getOfficePassword();

  if (honeypot) {
    redirect(getOfficeLoginPath(nextPath));
  }

  const passwordIsValid = officePassword
    ? submittedPassword === officePassword
    : submittedPassword.trim().length > 0;

  if (!passwordIsValid) {
    const loginPath = getOfficeLoginPath(nextPath);
    const separator = loginPath.includes("?") ? "&" : "?";

    redirect(`${loginPath}${separator}error=1`);
  }

  const cookieStore = await cookies();
  cookieStore.set(OFFICE_COOKIE_NAME, getOfficeToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: OFFICE_SESSION_SECONDS,
    path: "/office",
  });

  redirect(nextPath);
}

function OfficeLogin({
  showError,
  nextPath,
}: {
  showError: boolean;
  nextPath: string;
}) {
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
          <input type="hidden" name="next" value={nextPath} />

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

        <div className="pt-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-theme-heading">
              Projects
            </h2>
          </div>

          <div className="mt-5 grid gap-4">
            {officeProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/office/projects/${project.slug}`}
                className="block rounded-lg border border-theme-border bg-theme-surface p-6 transition hover:bg-theme-surface-subtle"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-theme-heading">
                      {project.title}
                    </h3>
                    <p className="pt-2 text-theme-text-muted">
                      {project.address}
                    </p>
                    <p className="pt-3 text-sm text-theme-text-subtle">
                      {project.summary}
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-theme-primary-soft px-3 py-1 text-sm font-semibold text-theme-primary-deep">
                    {project.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function OfficePage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string; next?: string }>;
}) {
  const resolvedSearchParams = await (searchParams ??
    Promise.resolve<{ error?: string; next?: string }>({}));
  const authenticated = await isOfficeAuthenticated();
  const nextPath = getSafeOfficeNextPath(resolvedSearchParams.next);

  if (authenticated && nextPath !== "/office") {
    redirect(nextPath);
  }

  if (!authenticated) {
    return (
      <OfficeLogin
        showError={resolvedSearchParams.error === "1"}
        nextPath={nextPath}
      />
    );
  }

  return <OfficeDashboard />;
}
