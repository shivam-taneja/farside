# Farside

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Desktop app for macOS and Windows. Uses the webcam to estimate head yaw. When you turn left, the right side of the screen fades. When you turn right, the left side fades.

All video stays on the device. No network. No accounts.

## Installation

You can download the latest version of Farside from the [GitHub Releases page](https://github.com/shivam-taneja/farside/releases/latest).

### macOS

1. Download the `.dmg` file that matches your Mac's processor:
   - **Apple Silicon (M1/M2/M3)**: `Farside_[version]_aarch64.dmg`
   - **Intel**: `Farside_[version]_x64.dmg`
2. Open the downloaded file and drag the **Farside** app into your `Applications` folder.

> **Note for macOS users:** Since Farside is not signed with a paid Apple Developer certificate, macOS might show a warning that the app is "damaged" or from an "unidentified developer." To fix this, open your Terminal and run:
>
> ```bash
> xattr -cr /Applications/Farside.app
> ```
>
> This removes the Apple quarantine flag and allows the app to open normally.

### Windows

1. Download `Farside_[version]_x64-setup.exe`.
2. Run the installer and follow the prompts.

> **Note for Windows users:** Because this app is new and not signed with an Extended Validation (EV) certificate, Windows Defender SmartScreen may display a blue warning screen saying "Windows protected your PC." To proceed, click **More info** and then click **Run anyway**.

### Linux

1. Download the `Farside_[version]_amd64.AppImage` or `.deb` file.
2. **For `.deb`:** Install it using your package manager or by running `sudo dpkg -i Farside_[version]_amd64.deb`.
3. **For `.AppImage`:** Mark the file as executable (`chmod +x Farside_[version]_amd64.AppImage`) and double-click to run it.

> **Note for Linux users:** Farside requires `libwebkit2gtk-4.1-0` (or `4.0`) to render the interface. This is installed by default on most modern distributions (like Ubuntu 22.04+), but if the app fails to open, ensure you have WebKit2GTK installed via your package manager.

## How it works

1. The camera captures frames locally.
2. MediaPipe Face Landmarker returns face landmarks.
3. OpenCV `solvePnP` turns those points into yaw (left / right).
4. Yaw is smoothed and mapped to a 0..1 fade amount.
5. A click-through fullscreen overlay draws a Duo-style wipe on the opposite side of the screen.

Look at the center of the screen and press the calibrate shortcut once. That pose is treated as "facing the display."

## Status

Early. Expect jitter in bad light, with strong backlight, or when the face is only partly in frame. Meetings that take the camera will pause tracking until the camera is free.

## Related

- **Website** — [github.com/shivam-taneja/farside-web](https://github.com/shivam-taneja/farside-web) • the Next.js site deployed at [farside.shivamtaneja.com](https://farside.shivamtaneja.com/)

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions and guidelines.

## License

[MIT](LICENSE) © Shivam Taneja
