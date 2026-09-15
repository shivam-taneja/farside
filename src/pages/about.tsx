import { useState } from "react";
import pkg from "../../package.json";
import { GithubIcon } from "@/components/ui/icons";
import { useOS } from "@/hooks/use-os";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";
import {
  SettingsHeader,
  SettingsCard,
  SettingsRow,
} from "@/components/ui/settings";

export function About() {
  const { name: osName } = useOS();
  const [isChecking, setIsChecking] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  async function checkForUpdates() {
    try {
      setIsChecking(true);
      setUpdateMessage("Checking for updates...");
      const update = await check();

      if (update) {
        setUpdateMessage(`Found version ${update.version}. Downloading...`);
        let downloaded = 0;
        let contentLength = 0;

        await update.downloadAndInstall((event) => {
          switch (event.event) {
            case "Started":
              contentLength = event.data.contentLength || 0;
              setUpdateMessage(`Downloading... 0%`);
              break;
            case "Progress":
              downloaded += event.data.chunkLength;
              const percent = contentLength
                ? Math.round((downloaded / contentLength) * 100)
                : 0;
              setUpdateMessage(`Downloading... ${percent}%`);
              break;
            case "Finished":
              setUpdateMessage("Download complete! Installing...");
              break;
          }
        });

        setUpdateMessage("Update installed. Restarting app...");
        await relaunch();
      } else {
        setUpdateMessage("You are on the latest version.");
      }
    } catch (e: any) {
      console.error("Update error:", e);

      const errorMessage = String(e);
      if (errorMessage.includes("404")) {
        setUpdateMessage("No public releases available yet.");
      } else if (
        errorMessage.includes("network") ||
        errorMessage.includes("fetch")
      ) {
        setUpdateMessage("Network error. Could not connect to update server.");
      } else {
        setUpdateMessage(
          "Failed to check for updates. Please try again later.",
        );
      }
    } finally {
      setIsChecking(false);
    }
  }

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
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shivam-taneja/farside"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2.5 text-sm font-medium text-app-bg transition-colors hover:bg-app-accent"
          >
            <GithubIcon className="h-4 w-4" />
            View the source
          </a>
          <button
            onClick={checkForUpdates}
            disabled={isChecking}
            className="inline-flex items-center gap-2 rounded-full border border-app-border bg-transparent px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-50 cursor-pointer"
          >
            {isChecking ? "Checking..." : "Check for updates"}
          </button>
        </div>
        {updateMessage && (
          <p className="mt-4 text-sm text-text-secondary">{updateMessage}</p>
        )}
      </div>
    </div>
  );
}
