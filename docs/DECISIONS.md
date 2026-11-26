# Decisions

- Browser app, Chromium only: it was the point of the project; the Electron prototype was dropped.
- Free hosting on GitHub Pages as static files: no cost, no build step.
- Plain HTML/JS/CSS, no npm or bundler: simplest for a non-engineer to maintain.
- Syntax pre-check runs in a throwaway Web Worker (Step 1 trial): gives line numbers and cannot hang the page. Unverified until Step 1 test 2 is reported.
- Widget network blocking will use CSP (iframe csp attribute or meta tag): sandbox alone does not block requests. Decision pending Step 1 test 7.
