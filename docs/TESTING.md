# Testing

Browser used: Brave (Mac) with the File System Access API flag enabled. Page: https://bryanlakesa.github.io/slop-/step1/

## Step 1: browser check
Click "Start audio and MIDI" first in every session.

| Test | What to do | Expected | Result |
|---|---|---|---|
| 1 | Press keys on the MIDI keyboard | "Last MIDI" updates | Passed |
| 2 | Run, play a key; insert syntax error, Run | Sine plays; "Syntax error on line 5" | Passed |
| 3 | Pick a folder, close tab, reopen, click Start | Status shows granted; note clicks and prompts needed | Passed (click count not recorded) |
| 4 | Install page as app, repeat test 3 | Note whether permission persists | Passed (details not recorded) |
| 5 | Drag both chips to the drop box | Native and/or host-mediated drop message | Native drop FAILED (only the widget's own message appeared). Host-mediated drop PASSED |
| 6 | Run hanging instrument | Note heartbeat, sound, what recovers | Page stayed alive, audio went silent, scope froze, buttons still clickable. "Stop and rebuild audio" then froze the whole page. Closing the tab recovered it |
| 7 | Read three network results | A allowed, B blocked, C blocked | A: fetch and image allowed. B: both blocked. C: both blocked |
| 8 | Run, play notes | Green scope draws a wave | Passed |
| 9 | Move widget slider; move Volume slider | Volume follows both ways | Passed (both sliders synced) |
| 10 | Instrument in its own sandboxed iframe: hang it, then remove the iframe | Page keeps running; removing the frame recovers | Not yet run |
