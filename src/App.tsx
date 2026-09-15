import "./App.css";

import { AppLayout } from "./components/layout/app-layout";

export default function App() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold tracking-tight text-blue-500 uppercase">
          Overview
        </h1>
        <p className="text-sm text-gray-500">
          Welcome to your new desktop app interface.
        </p>
      </div>
    </AppLayout>
  );
}
