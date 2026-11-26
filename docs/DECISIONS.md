# Decisions

- Browser app, Chromium only: it was the point of the project; the Electron prototype was dropped.
- Brave is the tested browser; it needs the File System Access API flag (brave://flags): Brave disables the folder picker by default. Chrome should work, untested.
- Free hosting on GitHub Pages as static files: no cost, no build step.
- Plain HTML/JS/CSS, no npm or bundler: simplest for a non-engineer to maintain.
- Syntax pre-check in a throwaway Web Worker: gave the error line number in Step 1 test 2 and cannot hang the page.
- Remembered slop~ folder via a handle in IndexedDB: Step 1 tests 3 and 4 passed.
- Widget-to-host drag is host-mediated (pointer positions, host draws the ghost): native drop from a sandboxed widget did not arrive in Brave (test 5).
- Widget internet blocking uses a CSP set by the host through the iframe csp attribute: blocked fetch and image in test 7B; a widget cannot leave it out. A CSP meta tag also blocked (7C) but is under the widget's control. Sandbox alone did not block (7A). Approved sites will go into the CSP later; to be retested.
- Widgets control instrument parameters through the host with normalized 0 to 1 values, synced both ways: Step 1 test 9 passed.
- A hung instrument silences audio but leaves the page usable; Stop/Rebuild by disconnect and close froze the page (test 6). Planned: a watchdog that warns when the instrument stops responding. Iframe isolation of the instrument is pending test 10.
