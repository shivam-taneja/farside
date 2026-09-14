# Farside

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Desktop app for macOS and Windows. Uses the webcam to estimate head yaw. When you turn left, the right side of the screen fades. When you turn right, the left side fades.

All video stays on the device. No network. No accounts.

## How it works

1. The camera captures frames locally.
2. MediaPipe Face Landmarker returns face landmarks.
3. OpenCV `solvePnP` turns those points into yaw (left / right).
4. Yaw is smoothed and mapped to a 0..1 fade amount.
5. A click-through fullscreen overlay draws a Duo-style wipe on the opposite side of the screen.

Look at the center of the screen and press the calibrate shortcut once. That pose is treated as "facing the display."

## Status

Early. Expect jitter in bad light, with strong backlight, or when the face is only partly in frame. Meetings that take the camera will pause tracking until the camera is free.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions and guidelines.

## License

[MIT](LICENSE) © Shivam Taneja
