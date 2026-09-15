import {
  Clock,
  Camera,
  SlidersHorizontal,
  Keyboard,
  ShieldCheck,
  Info,
} from "lucide-react";
import pkg from "../../../package.json";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", path: "/overview", icon: Clock },
  { name: "Calibration", path: "/calibration", icon: Camera },
  { name: "Appearance", path: "/appearance", icon: SlidersHorizontal },
  { name: "Shortcuts", path: "/shortcuts", icon: Keyboard },
  { name: "Privacy", path: "/privacy", icon: ShieldCheck },
  { name: "About", path: "/about", icon: Info },
];

export function AppSidebar() {
  return (
    <div className="flex h-full w-52 flex-col border-r border-app-border bg-app-panel px-3 pb-4 pt-4">
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-black/5 dark:bg-app-sidebar-active text-text-primary shadow-sm border border-black/5 dark:border-app-border"
                    : "text-text-secondary hover:bg-black/5 dark:hover:bg-app-sidebar-hover hover:text-text-primary",
                )
              }
            >
              <Icon className="h-4.5 w-4.5 text-text-secondary" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-3">
        <span className="text-xs font-mono font-medium tracking-wider text-text-secondary">
          v{pkg.version}
        </span>
      </div>
    </div>
  );
}
