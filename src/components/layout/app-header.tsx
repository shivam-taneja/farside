import { useEffect, useState } from "react";

export function AppHeader() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    // Check if the user is on macOS to apply the correct padding for traffic lights
    setIsMac(navigator.userAgent.toLowerCase().includes("mac"));
  }, []);

  return (
    <div
      data-tauri-drag-region
      className="flex h-12 w-full items-center border-b border-gray-200 bg-gray-50/80 px-4 backdrop-blur-sm"
    >
      {/* Space for macOS window controls (traffic lights) - only on Mac */}
      {isMac ? <div className="w-16 pointer-events-none"></div> : null}

      <div className="flex flex-1 items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Farside Logo" className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-widest text-gray-600">
            FARSIDE
          </span>
        </div>
      </div>

      {isMac ? <div className="w-16 pointer-events-none"></div> : null}
    </div>
  );
}
