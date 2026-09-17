# IXHUA 0.1 — Verification Record

Date: 2026-09-15
Status: **OWNER ACCEPTANCE CANDIDATE**

## Why this build exists

Checkpoint 10/11 still allowed a failure mode where the bottom navigation could say **Today** while the previous tab's DOM remained visible. IXHUA 0.1 was therefore rebased on the earlier stable Checkpoint 09 UI/navigation architecture, then the newer planner/training/support logic was ported forward deliberately.

The stale-Today bug was reproduced in an actual headless Chromium DOM session. Its runtime cause was found in the Today timeline renderer: support-block timing called a nonexistent `C.time(...)` helper, throwing during Today rendering after navigation. Because the title/nav state had already changed, the previous screen remained visible. The renderer now formats support-block times with a real minute-to-time helper instead of throwing.

## Locked behavior

- Today reconstructs deterministically after Training, Nutrition, Plan or Progress.
- Returning to Today resets the selected date to the real current date and exposes **Hour by hour**.
- Today combines saved life/work events and training in chronological order.
- The 21-day selector is one horizontally scrollable row at iPhone width.
- Training shows only the selected day's prescription.
- Plan is mobile-first: horizontal 21-day rail + selected-day vertical agenda; desktop week grid is hidden on iPhone.
- Hybrid preserves Running + Strength while preventing two strength sessions or two key/high-demand core sessions from stacking on the same date.
- Some Experience Upper/Lower programming retains 6–7 movement depth and meaningful working-set volume.
- Mobility and cardio support blocks open separately from Strength. Plyometrics also open separately when readiness allows.
- Strength workout start, deep set logging and automatic rest controls work in browser execution.
- Running selected-day workout opens through the Running flow.
- User-facing main surfaces use human dates rather than raw `YYYY-MM-DD` strings.

## Automated Node regression

Command:

```sh
node build.cjs
node --test tests/engine.test.cjs tests/ixhua-running.test.cjs tests/ixhua-athlete.test.cjs tests/owner-build.test.cjs tests/owner-corrections.test.cjs
```

Result: **61 / 61 PASS**.

This includes the 100,000 varied running-prescription invariant, Hybrid distribution, Upper/Lower A/B variation, Some Experience strength depth, Today navigation regressions, persistence protections, support integration and planner constraints.

## Real browser execution — iPhone-sized viewport

Chromium was run headlessly at **390 × 844** through the browser DevTools protocol with an actual populated Hybrid profile, generated plan, work shift and life event.

Passed:

- Training → Today
- Nutrition → Today
- Plan → Today
- Progress → Today
- each return rendered **Today + Hour by hour** rather than stale previous-tab DOM
- actual current date restored to Today
- work shift visible on Today
- life event visible on Today
- timeline times sorted chronologically
- 21 date cells present
- date rail `scrollWidth > clientWidth`
- date rail remains one flex row
- selected-day Training contains only one day's strength prescription
- strength detail opens
- Some Experience strength detail retains 6–7 movements
- Plan uses mobile selected-day agenda
- no unintended page-level horizontal overflow at 390 px
- desktop calendar grid not visible on iPhone
- zero captured runtime errors

## Workout/support browser execution

Passed:

- Mobility block opens independently and does not dump the parent Strength workout
- Cardio block opens independently and does not dump the parent Strength workout
- Plyometric block opens independently under a plyo-ready Hybrid profile
- Plyometrics appear on an appropriate day when readiness allows
- Strength detail opens
- Start Strength works
- active Some Experience workout exposes deep set logging
- completing a valid set starts the rest timer
- rest pause/resume/adjust/reset controls are present
- Running selected-day workout opens
- no runtime errors in these flows

## Human-date acceptance

No raw ISO date was found in the rendered main content for:

- Today
- Training
- Nutrition
- Plan
- Progress

Running cards/details were also updated to use human-readable dates.

## Boundary

This record verifies the local IXHUA 0.1 browser owner build and the tested training/planning flows above. It does **not** claim physical-iPhone acceptance, Apple Health/Watch native behavior, native GPS/background execution, cloud sync, or unconfigured external AI/provider success paths. Physical iPhone use remains the owner's final acceptance gate for IXHUA 0.1.

## 0.1.1 owner correction
- Preserved the verified Today/timeline architecture and all unrelated screens.
- Fixed the 21-day top rail so selecting an off-screen day re-renders that date and automatically keeps the selected day in view instead of snapping the rail back to its start.
- Corrected Hybrid strength sequencing to Lower → Upper, with A/B variation across weeks.
- When a Hybrid week truly has a third strength-support slot, it is Core & Athletic Conditioning rather than another heavy Lower session.
- Heavy-session collision protections remain unchanged.
- `npm test`: 9/9 engine tests passed after the change.
- Syntax/build checks passed. The full DOM preview suite could not be rerun in this packaging environment because its `jsdom` dev dependency is unavailable; this is recorded rather than represented as a passing test.
