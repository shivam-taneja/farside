import { useEffect, useRef } from "react";

interface CameraPreviewProps {
  isTracking: boolean;
  onCameraName: (name: string) => void;
}

export function CameraPreview({
  isTracking,
  onCameraName,
}: CameraPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const activeRequestRef = useRef<boolean>(false);

  useEffect(() => {
    function stopCamera() {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    if (isTracking) {
      activeRequestRef.current = true;
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (!activeRequestRef.current) {
            // User paused while the camera was starting up
            stream.getTracks().forEach((track) => track.stop());
            return;
          }
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          const track = stream.getVideoTracks()[0];
          if (track) onCameraName(track.label || "Camera Active");
        })
        .catch((err) => {
          console.error("Error accessing camera: ", err);
          onCameraName("Camera not found");
        });
    } else {
      activeRequestRef.current = false;
      stopCamera();
      onCameraName("Paused");
    }

    return () => {
      activeRequestRef.current = false;
      stopCamera();
    };
  }, [isTracking, onCameraName]);

  return (
    <div className="relative aspect-video w-full bg-[#121620] flex items-center justify-center overflow-hidden">
      {isTracking ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover opacity-60 scale-x-[-1]"
        />
      ) : (
        <div className="text-text-secondary text-sm font-medium">
          Preview Paused
        </div>
      )}

      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 rounded-xl bg-app-bg border border-app-border overflow-hidden shadow-xl pointer-events-none">
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="h-1 w-1 rounded-full bg-blue-500" />
        </div>
        <div className="w-1/2 bg-blue-500" />
      </div>
    </div>
  );
}
