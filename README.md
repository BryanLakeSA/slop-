# slop~

An Electron desktop host for MIDI controlled instruments with embedded JS code boxes and widgets with HTML code boxes.
Press Run, and the instrument appears with auto-generated controls, ready to play from a MIDI keyboard via Web MIDI.
Widgets (either existing embeds or custom made) will be able to see the instrument's audio and control its parameters.

Status:
Phase 0 (feasibility) is done.
Phase 1 is in progress: Step 1a (shell, code box, Run, Save Instrument, sampler) is built and its manual tests are pending. See CHANGELOG and TESTING.

Run it:
Needs Node.js (nodejs.org). macOS is the only platform tested.
npm install
npm start

Where your files live:
Created on first launch in Documents/slop~/: Instruments/ (.js), Widgets/ (.html), Samples/ (yours; the app never copies files into it), Presets/Host Presets, Presets/Instrument Presets, Presets/Widget Presets (.json).

If an instrument freezes the window:
A hung instrument freezes the whole window, so the rescue lives in the macOS menu bar at the top of the screen: Audio > Open fresh window, discard stuck one (Cmd+Shift+K). Unsaved code in the stuck window is lost.

Docs
Instrument contract: what instrument code must look like
Decisions: why things are the way they are
Testing: manual test lists and results
Changelog
