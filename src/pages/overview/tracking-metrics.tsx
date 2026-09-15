interface TrackingMetricsProps {
  cameraName: string;
}

export function TrackingMetrics({ cameraName }: TrackingMetricsProps) {
  return (
    <div className="grid grid-cols-3 divide-x divide-app-border bg-app-card">
      <div className="p-4">
        <p className="text-[10px] font-mono font-medium tracking-widest text-text-secondary uppercase mb-1">
          Head Yaw
        </p>
        <p className="text-xl font-bold text-text-primary">0°</p>
      </div>
      <div className="p-4">
        <p className="text-[10px] font-mono font-medium tracking-widest text-text-secondary uppercase mb-1">
          Fade Amount
        </p>
        <p className="text-xl font-bold text-text-primary">0%</p>
      </div>
      <div className="p-4">
        <p className="text-[10px] font-mono font-medium tracking-widest text-text-secondary uppercase mb-1">
          Camera
        </p>
        <p className="text-base font-bold text-text-primary truncate">
          {cameraName}
        </p>
      </div>
    </div>
  );
}
