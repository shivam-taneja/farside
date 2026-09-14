import { Moon, Sun } from "lucide-react";
import { GithubIcon } from "../icons/github-icon";
import { GITHUB_URL } from "../../lib/constants";
import { useTheme } from "../../lib/use-theme";

export function SiteHeader() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Farside home"
        >
          <img src="/logo.svg" alt="" className="size-8 rounded-lg" />
          <span className="font-display text-lg font-bold">Farside</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="group inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-panel/80 text-muted-foreground ring-1 ring-border backdrop-blur transition hover:text-primary hover:ring-primary/40"
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            title={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <span className="grid size-5 place-items-center rounded-full bg-background ring-1 ring-border">
              {dark ? (
                <Sun className="size-3.5" />
              ) : (
                <Moon className="size-3.5" />
              )}
            </span>
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
