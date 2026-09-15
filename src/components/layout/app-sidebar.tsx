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

const navItems = [
  { name: "Overview", icon: Clock, isActive: false },
  { name: "Calibration", icon: Camera, isActive: false },
  { name: "Appearance", icon: SlidersHorizontal, isActive: true },
  { name: "Shortcuts", icon: Keyboard, isActive: false },
  { name: "Privacy", icon: ShieldCheck, isActive: false },
  { name: "About", icon: Info, isActive: false },
];

export function AppSidebar() {
  return (
    <div className="flex h-full w-52 flex-col border-r border-gray-200 bg-[#F4F5F7] px-3 pb-4 pt-4">
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                item.isActive
                  ? "bg-black/5 text-gray-900 shadow-sm border border-black/5"
                  : "text-gray-600 hover:bg-black/5 hover:text-gray-900",
              )}
            >
              <Icon className="h-4.5 w-4.5 text-gray-500" />
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="px-3">
        <span className="text-xs font-mono font-medium tracking-wider text-gray-400">
          v{pkg.version}
        </span>
      </div>
    </div>
  );
}
