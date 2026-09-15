import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useOS } from "@/hooks/use-os";

export function Appearance() {
  const { theme, setTheme } = useTheme();
  const { name: osName } = useOS();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2">
          Appearance
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Shape the fold
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Tune how the far side of your screen disappears.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#12131A] overflow-hidden divide-y divide-gray-200 dark:divide-white/5 shadow-sm">
        <div className="flex justify-between items-center p-5">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              App theme
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Match {osName} light and dark mode.
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-full p-1 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#16181D]">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer",
                theme === "light"
                  ? "bg-white dark:bg-[#1C1E26] text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/5"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-transparent border border-transparent",
              )}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer",
                theme === "dark"
                  ? "bg-white dark:bg-[#1C1E26] text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/5"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-transparent border border-transparent",
              )}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("system")}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer",
                theme === "system"
                  ? "bg-white dark:bg-[#1C1E26] text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/5"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-transparent border border-transparent",
              )}
            >
              System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
