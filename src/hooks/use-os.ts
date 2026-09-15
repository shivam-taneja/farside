import { useEffect, useState } from "react";

export type OSName = "macOS" | "Windows" | "Linux" | "System";

export interface OSState {
  name: OSName;
  isMac: boolean;
  isWindows: boolean;
  isLinux: boolean;
}

export function useOS() {
  const [os, setOS] = useState<OSState>({
    name: "System",
    isMac: false,
    isWindows: false,
    isLinux: false,
  });

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isMac = ua.includes("mac");
    const isWindows = ua.includes("win");
    const isLinux = ua.includes("linux");

    let name: OSName = "System";
    if (isMac) name = "macOS";
    else if (isWindows) name = "Windows";
    else if (isLinux) name = "Linux";

    setOS({ name, isMac, isWindows, isLinux });
  }, []);

  return os;
}
