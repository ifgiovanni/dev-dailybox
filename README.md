# Dev Dailybox — VS Code Extension

**Dev Dailybox** is your lightweight productivity extension for developers, offering quick tools like ULID/UUID generation, Base64 encoding/decoding, and more — all without leaving VS Code.

---

## Features

- Generate ULIDs
- Right-click context menu support
- Smart placeholder replacement:
  - `ulid1, ulid2, ulid1` → auto-resolved with consistent values

---

## Usage

### From Command Palette
- Open the Command Palette: `Cmd/Ctrl + Shift + P`
- Type `Dev Dailybox: ...` to access available tools:
  - `Generate ULID`
  - `Replace ULID Placeholders`

### From Right-Click Menu
- Right-click inside your editor and select actions under **Dev Dailybox**

---

## Placeholder Support

Write in your code:

```txt
ulid1, ulid2, ulid1


## Release Notes

### 0.0.2
* Added documentation
* Added category when you run the command with `Cmd/Ctrl + Shift + P`

### 0.0.1
* Added ULID generator
* Added ULID replace bassed on pattern

## Author

ifgiovanni.com