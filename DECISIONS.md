# Decisions

Newest at the bottom. Date: 2026-11-24 unless stated.

- **Electron, not Tauri.** Tauri's WebKit lacks Web MIDI.
- **Security basics.** contextIsolation on, nodeIntegration off, sandboxed renderer, small preload API, every file path checked to stay inside its allowed folder. Instrument code runs only in an AudioWorklet. "Reasonable" security, not extreme.
- **MIDI permission.** Approve any permission whose name starts with `midi`. Approving only the exact name `midi` was denied in Electron 45.
- **Syntax pre-check in the main process** (Node `vm.Script`), because `addModule` gives no line numbers. It parses as a script, so `import`/`export` is rejected.
- **Manifest is a `/*SLOP {json}*/` comment block**, and the host registers the processor, so each Run gets a fresh unique name.
- **Drag from widgets is host-mediated.** Native drag from a sandboxed iframe never reached the host (Phase 0 test c). The widget reports pointer positions; the host draws the ghost, finds the drop zone and validates the path.
- **Hung worklets freeze the whole window.** A new AudioContext or a reload in the same window does not recover. Forced kill plus reload left a white window. What works: open a new window first, then destroy the old one (menu Audio, Cmd+Shift+K).
- **No autosave of anything,** and no hidden recovery copy. Unsaved code is lost if the window is discarded.
- **Widgets.** Right sidebar, compact: 2-3 visible before scrolling. Step 2 starts with a small feasibility test of loading widgets through a custom protocol with per-widget rules, so a widget can reach the internet only for sites you approve. Fallback: `srcdoc` with no internet. "May control instrument" is a per-widget switch, off for pasted widgets, saved in the Host Preset, never in a Widget Preset.
- **Uniform UI.** No themes, skins or layout options; instruments get only the auto-generated panel.
- **Build order.** 1a shell and sampler, 1b instrument presets, Step 2 widgets, then Phase 2.
