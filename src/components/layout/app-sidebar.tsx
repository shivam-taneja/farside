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
    <div className="flex h-full w-52 flex-col border-r border-gray-200 dark:border-white/5 bg-[#F4F5F7] dark:bg-[#12131A] px-3 pb-4 pt-4">
      <nav className="flex-1 space-y-1">
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
                    ? "bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white shadow-sm border border-black/5 dark:border-white/5"
                    : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
                )
              }
            >
              <Icon className="h-4.5 w-4.5 text-gray-500 dark:text-gray-400" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-3">
        <span className="text-xs font-mono font-medium tracking-wider text-gray-400 dark:text-gray-500">
          v{pkg.version}
        </span>
      </div>
    </div>
  );
}
