import * as React from "react";
import { cn } from "@/lib/utils";

export function SettingsHeader({
  title,
  heading,
  description,
  className,
}: {
  title: string;
  heading: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h1 className="text-xs font-bold tracking-widest text-text-accent uppercase mb-2">
        {title}
      </h1>
      <h2 className="text-3xl font-bold text-text-primary">{heading}</h2>
      {description && <p className="text-text-secondary mt-1">{description}</p>}
    </div>
  );
}

export function SettingsCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-app-border bg-white dark:bg-app-card overflow-hidden divide-y divide-gray-200 dark:divide-white/5 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SettingsRow({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-between items-center p-5", className)}>
      <div>
        <h3 className="font-medium text-text-primary">{title}</h3>
        {description && (
          <p className="text-sm text-text-secondary">{description}</p>
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}
