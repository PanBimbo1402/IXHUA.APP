# IXHUA Checkpoint 09 — Support Blocks + Mobile Plan

Owner correction pass implemented from Checkpoint 08.

## Implemented
- Mobility, plyometric and cardio support blocks open independently from their parent Strength/Running session.
- Strength workout detail no longer expands Mobility/Plyo/Cardio content into the same sheet.
- Each support block has its own exact prescription and Start action.
- Today timeline support blocks open their own support details.
- Plyometrics are quality-first: normally 1–2 suitable Hybrid exposures, not daily filler; long runs are excluded from plyo primer attachment.
- Plyo primer selection is limited to the first suitable run and a suitable lower/full-body strength session.
- Timed cardio support sessions render correctly without fake “Exercise 1 of 0” copy.
- Today is restored toward the life-first REBUILD interaction model: 21-day horizontal date rail, compact next-training line, hour-by-hour timeline prioritized.
- Plan is mobile-first: one 21-day horizontal date rail plus one selected-day vertical agenda. The desktop-like three stacked weekly grids are not shown as the default iPhone experience.
- Training remains selected-day focused.

## Verification
- `node build.cjs` passed.
- 53/53 non-browser unit/integration tests passed.
- Includes 100,000 varied Running prescription checks.
- Added tests proving Hybrid support remains attached without replacing core sessions and plyometric primers are limited to appropriate sessions.

## Boundary
Automated phone-preview tests were not rerun because `jsdom` is unavailable in this execution environment. `npm ci` timed out while attempting to restore browser-test dependencies. Physical iPhone owner acceptance remains required.
