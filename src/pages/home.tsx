import { SiteHeader } from "../components/header/site-header";
import { SiteFooter } from "../components/footer/site-footer";
import { useTheme } from "../lib/use-theme";

export function Home() {
  const { switching } = useTheme();

  return (
    <div
      className={`${switching ? "theme-wash" : ""} flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500`}
    >
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-6">
        {/* Page content goes here */}
      </main>
      <SiteFooter />
    </div>
  );
}
