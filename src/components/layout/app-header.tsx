export function AppHeader() {
  return (
    <div
      data-tauri-drag-region
      className="flex h-12 w-full items-center border-b border-gray-200 bg-gray-50/80 px-4 backdrop-blur-sm"
    >
      <div className="flex flex-1 items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Farside Logo" className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-widest text-gray-600">
            FARSIDE
          </span>
        </div>
      </div>
    </div>
  );
}
