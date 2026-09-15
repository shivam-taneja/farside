import { Link } from "react-router-dom";

interface TrackingControlsProps {
  isUserPaused: boolean;
  isTracking: boolean;
  onTogglePause: () => void;
}

export function TrackingControls({
  isUserPaused,
  isTracking,
  onTogglePause,
}: TrackingControlsProps) {
  return (
    <div className="flex items-center gap-4 mt-2">
      <button
        onClick={onTogglePause}
        className="rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-app-bg transition-colors hover:opacity-90"
      >
        {isUserPaused ? "Resume tracking" : "Pause tracking"}
      </button>

      <Link
        to="/calibration"
        className="rounded-full border border-app-border bg-transparent px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5"
      >
        Recalibrate
      </Link>

      <div className="flex items-center gap-2 ml-2">
        <div
          className={`h-2 w-2 rounded-full ${
            isTracking
              ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              : "bg-gray-500"
          }`}
        />
        <span className="text-sm font-medium text-text-secondary">
          {isTracking ? "Overlay active on display 1" : "Tracking paused"}
        </span>
      </div>
    </div>
  );
}
