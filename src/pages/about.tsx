import pkg from "../../package.json";
import { GithubIcon } from "@/components/ui/icons";
import { useOS } from "@/hooks/use-os";
import {
  SettingsHeader,
  SettingsCard,
  SettingsRow,
} from "@/components/ui/settings";

export function About() {
  const { name: osName } = useOS();

  return (
    <div className="flex flex-col gap-8">
      <SettingsHeader
        title="About"
        heading={`Farside ${pkg.version}`}
        description="Early build. Expect jitter in low light or with strong backlight."
      />

      <SettingsCard>
        <SettingsRow title="Platform">
          <span className="font-mono text-sm text-text-secondary lowercase">
            {osName}
          </span>
        </SettingsRow>

        <SettingsRow title="Head tracking">
          <span className="font-mono text-sm text-text-secondary">
            MediaPipe • OpenCV
          </span>
        </SettingsRow>

        <SettingsRow title="Licence">
          <span className="font-mono text-sm text-text-secondary">
            open source
          </span>
        </SettingsRow>
      </SettingsCard>

      <div>
        <a
          href="https://github.com/shivam-taneja/farside"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2.5 text-sm font-medium text-app-bg transition-colors hover:bg-app-accent"
        >
          <GithubIcon className="h-4 w-4" />
          View the source
        </a>
      </div>
    </div>
  );
}
