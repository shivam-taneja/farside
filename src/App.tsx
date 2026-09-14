import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { SiteHeader } from "./components/header/site-header";
import { SiteFooter } from "./components/footer/site-footer";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <h1>Welcome to Tauri + React</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
        <p>{greetMsg}</p>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
