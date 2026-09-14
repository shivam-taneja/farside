# Contributing to Farside

Thanks for your interest in contributing! Farside is a small privacy-first desktop app — contributions that keep it fast, local, and dependency-light are most welcome.

---

## Table of Contents

- [Getting started](#getting-started)
- [Ways to contribute](#ways-to-contribute)
- [Development setup](#development-setup)
- [Submitting a pull request](#submitting-a-pull-request)
- [Coding style](#coding-style)
- [Reporting bugs](#reporting-bugs)

---

## Getting started

1. **Fork** the repo and clone your fork.
2. Make sure you have the prerequisites installed (see [Development setup](#development-setup)).
3. Create a branch for your change: `git checkout -b feat/my-feature` or `git checkout -b fix/my-bug`.
4. Make your changes, test locally, then open a PR.

---

## Ways to contribute

| Type      | Examples                                                    |
| --------- | ----------------------------------------------------------- |
| Bug fixes | Fix jitter in low-light, camera-release race condition      |
| Features  | New fade curves, tray icon, keyboard shortcut customisation |
| Docs      | Improve README, add build guides for Linux                  |
| Tests     | Add unit tests for yaw-smoothing or landmark parsing        |
| UI        | Improve the overlay design or settings panel                |

---

## Development setup

### Prerequisites

| Tool                           | Version | Notes            |
| ------------------------------ | ------- | ---------------- |
| [Rust](https://rustup.rs/)     | stable  | Tauri backend    |
| [Node.js](https://nodejs.org/) | ≥ 20    | Frontend tooling |
| [pnpm](https://pnpm.io/)       | ≥ 9     | Package manager  |
| Xcode Command Line Tools       | latest  | macOS only       |

### Install & run

```bash
# Install JS dependencies
pnpm install

# Start the Tauri dev server (hot-reloads both frontend and Rust backend)
pnpm tauri dev
```

### Build a production bundle

```bash
pnpm tauri build
```

---

## Submitting a pull request

1. Keep PRs **focused** — one feature or fix per PR makes review much easier.
2. Reference any related issue in the PR description (`Closes #123`).
3. Describe **what** changed and **why** — not just what the code does.
4. If you're adding a new user-facing behaviour, update the relevant section of `README.md`.
5. All video/camera data must continue to stay **on-device**. PRs that add network calls for frame data will not be merged.

---

## Coding style

- **Rust**: run `cargo fmt` and `cargo clippy` before committing. Fix all clippy warnings.
- **TypeScript / React**: the project uses TypeScript strict mode — no `any` unless absolutely necessary.
- **Commit messages**: use the [Conventional Commits](https://www.conventionalcommits.org/) format (`feat:`, `fix:`, `docs:`, `chore:`, etc.).

---

## Reporting bugs

Open a [GitHub Issue](../../issues/new) and include:

- OS & version (e.g. macOS 15.4)
- App version / commit hash
- Steps to reproduce
- What you expected vs. what happened
- Logs if relevant (Tauri logs appear in the terminal where you ran `pnpm tauri dev`)

---

## License

By contributing you agree that your contributions will be licensed under the [MIT License](LICENSE).
