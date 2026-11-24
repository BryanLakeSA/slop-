# Changelog

## Step 1a (built, tests pending)
- Real layout: left sidebar (start audio and MIDI, MIDI input, audio output, master volume, Panic, Samples refresh) and instrument section
- Folders created on first launch; `Instruments/Sampler.js` written if the folder is empty
- Code box, Run, error display with line numbers and Copy error, Stop / Rebuild, Save Instrument, dirty marker
- Controls generated from the instrument's manifest
- Temporary Sample dropdown (replaced by the Sample Browser widget in Step 2)

## Phase 0 (done)
- Web MIDI, pasted AudioWorklet with syntax-error line numbers, sample read/decode/play, analyser feed to a widget, widget-to-instrument control both ways: all pass
- Drag from a sandboxed widget replaced by a host-mediated pointer drag (native drag did not work)
- Hung instruments freeze the window; rescue is the Audio menu item (see DECISIONS)
