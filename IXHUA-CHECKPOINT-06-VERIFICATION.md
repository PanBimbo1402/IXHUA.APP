# IXHUA CHECKPOINT 06 — TODAY / TRAINING NAVIGATION CORRECTION

Owner correction based on physical iPhone feedback.

Implemented:
- Replaced stacked three-week day grids in Today/Training with one horizontally scrollable 21-day strip.
- Training now renders ONLY the selected day's prescription below the day strip; removed the long three-week future workout list from Training.
- Restored the missing workout detail renderer that caused `Can't find variable: detailsBody` and blocked opening strength workouts.
- Fixed Today timeline ordering by normalizing 12-hour and 24-hour time strings before sorting.
- Preserved shared canonical schedule and 3-week visibility through horizontal scrolling.
- Preserved IXHUA visual identity while using REBUILD's simple day-selector mental model.

Verification performed:
- `node --check js/ixhua/athlete-ui.js` — PASS
- `node build.cjs` — PASS
- `node --test tests/engine.test.cjs tests/ixhua-running.test.cjs tests/ixhua-athlete.test.cjs` — 48/48 PASS
- Includes 100,000 varied running prescription checks.

Still requires physical iPhone owner acceptance for the changed UI flow.
