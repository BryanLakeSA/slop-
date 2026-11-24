# Testing

Manual tests, run by hand. Update the Result column after each step.

## Phase 0 (macOS, Electron 45)
| Test | Result |
|---|---|
| a) Web MIDI receives notes | Pass |
| b) Pasted worklet runs; syntax errors show line numbers | Pass |
| c) Drag from sandboxed widget to host drop zone | Pass (host-mediated pointer drag) |
| d) Read, decode and play a sample from Samples | Pass |
| e) Analyser feed reaches a scope widget | Pass |
| f) Widget slider and instrument slider stay in sync | Pass |
| g) Recover from a hung instrument | Pass (open a fresh window; reload and in-window Rebuild fail) |

## Step 1a
| Test | Expected | Result |
|---|---|---|
| 1 Launch | "Sampler" loaded; `Documents/slop~/Instruments/Sampler.js` exists | |
| 2 Start audio and MIDI | Keyboard and an output device listed | |
| 3 Run, pick a sample, play keyboard | Sampler sounds; C4 plays the sample at original pitch | |
| 4 Move each slider | Each affects only itself; value text updates | |
| 5 Edit code, then Save Instrument | Dirty marker appears, then clears; file updates | |
| 6 Add `let = ;` and Run | Red error names a line; Copy error works | |
| 7 Panic while holding a note | Silence | |
| 8 Change audio output | Sound moves to the other device | |
