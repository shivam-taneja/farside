import { useIsMac } from "@/hooks/use-is-mac";

export function AppHeader() {
  const isMac = useIsMac();

  return (
    <div
      data-tauri-drag-region
      className="flex h-12 w-full items-center border-b border-gray-200 dark:border-white/5"
    >
      <div className="flex h-full w-52 shrink-0 items-center bg-[#F4F5F7] dark:bg-[#12131A] px-4">
        {isMac && <div className="w-16 pointer-events-none" />}
      </div>

      <div className="flex flex-1 h-full items-center justify-center bg-white dark:bg-[#0E1015] pointer-events-none pr-52">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Farside Logo" className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-400">
            FARSIDE
          </span>
        </div>
      </div>
    </div>
  );
}
