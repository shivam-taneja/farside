import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";

import { Overview } from "./pages/overview";
import { Calibration } from "./pages/calibration";
import { Appearance } from "./pages/appearance";
import { Shortcuts } from "./pages/shortcuts";
import { Privacy } from "./pages/privacy";
import { About } from "./pages/about";

import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="farside-ui-theme">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/calibration" element={<Calibration />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/shortcuts" element={<Shortcuts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}
