# IXHUA 0.1.3 — Owner Acceptance

This is the first separated **IXHUA 0.1.3** owner-test build. It is intentionally based on the last stable Today/navigation architecture, then ports the newer IXHUA training/planner improvements on top instead of continuing the buggy Today branch.

## Start on iPhone

1. Extract the ZIP on the Windows PC.
2. Double-click **START-IXHUA.bat**.
3. Keep that window open.
4. Put the iPhone on the same trusted Wi-Fi.
5. Scan the QR with iPhone Camera and open it in Safari.

Node.js 22+ is required. No npm install is required to run the owner preview.

## What IXHUA 0.1 locks in

- **Today is Today:** returning from Training, Nutrition, Progress or Plan always reconstructs the actual Today surface instead of leaving stale tab content behind.
- **Life + training timeline:** Today contains the chronological **Hour by hour** schedule, including saved work/life events and prescribed training.
- **One 21-day horizontal date rail:** Today, Training and Plan use the same left/right swipe interaction.
- **Selected-day Training:** Training shows only the selected day instead of a multiweek feed.
- **Mobile Plan:** on iPhone, Plan uses the horizontal rail + one selected-day vertical agenda; the desktop-style week grid is not the phone default.
- **Hybrid is actually concurrent:** Running and Strength are both core. Key/high-demand sessions are distributed instead of stacking two strength sessions or two core heavy sessions on one day.
- **Deeper experienced lifting:** “Some experience” retains a 6–7 movement Upper/Lower A/B structure with meaningful working-set volume instead of collapsing to beginner 2-set sessions.
- **Support work stays attached:** Mobility prep, quality-first plyometrics when readiness allows, and easy Zone 2 finishers can support the main session without stealing a core training day. Their Training tabs open each block separately.
- **Human dates:** normal athlete surfaces use labels such as `TUESDAY, SEP 15`, not raw ISO dates.
- **Real workout flow:** strength set logging, workout clock, automatic rest timer, pause/resume, ±15 seconds and reset remain functional. Running retains its separate timed prescription/session flow.

Local data remains on the phone/browser through the legacy-compatible `rebuild-core-0-9` storage key so existing owner-test data can migrate rather than disappear.

## Verification

Read **IXHUA-0.1-VERIFICATION.md** for the exact automated and browser acceptance evidence. The build is not being represented as the full production/native Release Candidate: Apple Health/Watch, native GPS/background execution, cloud sync, full AI actions and other external/native boundaries remain separate work.

Physical iPhone use is still the owner acceptance gate. The goal of 0.1 is to establish a stable IXHUA base we can continue from without breaking Today again.
