# Instrument contract

Status: matches Step 1a. Widget SDK and presets are not documented yet. This file is the basis for the "Copy primer for Claude" button (Phase 2); `Instruments/Sampler.js` is the worked example.

## File
A `.js` file in `Documents/slop~/Instruments/`. It runs only inside an AudioWorklet: no DOM, no network, no `import`/`export`.

## Manifest
The file starts with one comment block containing JSON:

    /*SLOP {"id":"sampler","name":"Sampler","version":1,
      "samples":[{"id":"main","label":"Sample"}],
      "params":[{"id":"volume","label":"Volume","min":0,"max":1,"def":0.7}]}*/

- `id`: stable identifier (presets will link by it). `name`: display name and file name. `version`: number.
- `samples`: sample slots. Step 1a loads one sample, into the first slot.
- `params`: `id` (stable), `label`, `min`, `max`, `def`; `type`: `continuous` (default), `stepped` or `toggle` (rounded to integers); `scaling`: `linear` (default) or `exponential` (needs `min` > 0).

## Processor
Define `class Instrument extends AudioWorkletProcessor`. Do not call `registerProcessor`; the host does, with a unique name per Run. No inputs; output is stereo (2 channels). Messages arrive on `this.port.onmessage`, as `{data}`:

| Message | Meaning |
|---|---|
| `{t:'param', id, v}` | Parameter value, already scaled to its min/max |
| `{t:'sample', id, rate, data}` | `data` is an array of Float32Array channels (1 or 2); `rate` is its sample rate |
| `{t:'on', n, v}` | Note on: MIDI note `n`, velocity `v` 0 to 1 |
| `{t:'off', n}` | Note off (Panic sends this for every note 0 to 127) |
| `{t:'cc', n, v}` | Controller `n`, value 0 to 1 |
| `{t:'bend', v}` | Pitch bend, -1 to 1 |

## Errors
Syntax errors are caught before loading and shown with a line number. Runtime errors only show as "Processor runtime error". An instrument that loops forever freezes the whole window; see the rescue in README.
