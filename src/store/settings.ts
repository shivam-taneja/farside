import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { load } from "@tauri-apps/plugin-store";

const store = await load("settings.json", { autoSave: true });

const tauriStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await store.get<string>(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await store.set(name, value);
    await store.save();
  },
  removeItem: async (name: string): Promise<void> => {
    await store.delete(name);
    await store.save();
  },
};

type Theme = "dark" | "light" | "system";

interface SettingsState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "farside-settings",
      version: 1,
      storage: createJSONStorage(() => tauriStorage),
    },
  ),
);
