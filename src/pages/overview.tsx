import { useEffect, useState } from "react";
import { SettingsHeader, SettingsCard } from "@/components/ui/settings";
import { CameraPreview } from "./overview/camera-preview";
import { TrackingMetrics } from "./overview/tracking-metrics";
import { TrackingControls } from "./overview/tracking-controls";

export function Overview() {
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  const [cameraName, setCameraName] = useState("Loading...");

  // Handle window focus/blur for auto-pausing
  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const isTracking = !isUserPaused && isFocused;

  return (
    <div className="flex flex-col gap-6">
      <SettingsHeader
        title="Overview"
        heading={isUserPaused ? "Tracking is paused" : "Tracking is live"}
        description="Move your head left or right to see how it folds the far side of your display."
      />

      <SettingsCard className="border-app-border overflow-hidden bg-[#1A1F2B]">
        <CameraPreview isTracking={isTracking} onCameraName={setCameraName} />
        <TrackingMetrics cameraName={cameraName} />
      </SettingsCard>

      <TrackingControls
        isUserPaused={isUserPaused}
        isTracking={isTracking}
        onTogglePause={() => setIsUserPaused(!isUserPaused)}
      />
    </div>
  );
}
