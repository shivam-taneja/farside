import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useOS } from "@/hooks/use-os";
import {
  SettingsHeader,
  SettingsCard,
  SettingsRow,
} from "@/components/ui/settings";

export function Appearance() {
  const { theme, setTheme, uiSize, setUiSize } = useTheme();
  const { name: osName } = useOS();

  return (
    <div className="flex flex-col gap-8">
      <SettingsHeader
        title="Appearance"
        heading="Shape the fold"
        description="Tune how the far side of your screen disappears."
      />

      <SettingsCard>
        <SettingsRow
          title="App theme"
          description={`Match ${osName} light and dark mode.`}
        >
          <div className="flex items-center gap-1 rounded-full p-1 border border-app-border bg-app-segmented-bg">
            {(
              [
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
                { label: "System", value: "system" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer",
                  theme === option.value
                    ? "bg-app-segmented-active text-text-primary shadow-sm border border-app-border"
                    : "text-text-secondary hover:text-text-primary bg-transparent border border-transparent",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </SettingsRow>

        <SettingsRow
          title="UI Scale"
          description="Adjust the overall size of the application."
        >
          <div className="flex items-center gap-1 rounded-full p-1 border border-app-border bg-app-segmented-bg">
            {(
              [
                { label: "Small", value: "small" },
                { label: "Medium", value: "medium" },
                { label: "Large", value: "large" },
                { label: "System", value: "system" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                onClick={() => setUiSize(option.value)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer",
                  uiSize === option.value
                    ? "bg-app-segmented-active text-text-primary shadow-sm border border-app-border"
                    : "text-text-secondary hover:text-text-primary bg-transparent border border-transparent",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </SettingsRow>
      </SettingsCard>
    </div>
  );
}
