import { GithubIcon } from "../icons/github-icon";
import { GITHUB_URL } from "../../lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="" className="size-7 rounded-md" />
          <p className="font-mono text-[11px] uppercase text-muted-foreground">
            Farside • open source
          </p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" /> View on GitHub
        </a>
      </div>
    </footer>
  );
}
