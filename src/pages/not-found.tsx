import { Link } from "react-router-dom";
import { SiteHeader } from "../components/header/site-header";
import { SiteFooter } from "../components/footer/site-footer";
import { useTheme } from "../lib/use-theme";

export function NotFound() {
  const { switching } = useTheme();

  return (
    <div
      className={`${switching ? "theme-wash" : ""} flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500`}
    >
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <p className="font-mono text-[11px] uppercase text-primary">
            Lost off the far side
          </p>
          <h1 className="mt-4 font-display text-7xl font-bold text-foreground">
            404
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This page faded away — or never existed. Head back to the bright
            side.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
