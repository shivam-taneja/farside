import { useOS } from "@/hooks/use-os";

export function AppHeader() {
  const { isMac } = useOS();

  return (
    <div
      data-tauri-drag-region
      className="flex h-12 w-full items-center border-b border-app-border"
    >
      <div className="flex h-full w-52 shrink-0 items-center bg-app-panel px-4">
        {isMac && <div className="w-16 pointer-events-none" />}
      </div>

      <div className="flex flex-1 h-full items-center justify-center bg-app-bg pointer-events-none pr-52">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Farside Logo" className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-widest text-text-secondary">
            FARSIDE
          </span>
        </div>
      </div>
    </div>
  );
}
