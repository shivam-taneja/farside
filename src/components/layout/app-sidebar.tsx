import { Clock } from "lucide-react";

export function AppSidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-[#F4F5F7] px-3 py-4">
      <nav className="flex-1 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 rounded-md bg-gray-200/60 px-3 py-2 text-sm font-medium text-gray-900"
        >
          <Clock className="h-4 w-4" />
          Overview
        </a>
      </nav>
    </div>
  );
}
