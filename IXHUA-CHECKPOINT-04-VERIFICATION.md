# IXHUA CHECKPOINT 04 — TRAINING / LONGEVITY OWNER CORRECTION

## Implemented in this checkpoint
- Distinct Upper Body A/B and Lower Body A/B exercise selections.
- Priority-aware strength volume modes for runner support, Hybrid running/equal/strength priorities, general fitness, longevity, and strength-first athletes.
- Set-trimming under time pressure preserves higher-value working sets before deleting movements.
- Training view now starts from the shared weekly navigation and selected day instead of raw dated list-first presentation.
- Focused Training Mode distinguishes WORKOUT elapsed time from REST countdown.
- Rest timer discoverability and controls: auto-start explanation, +/-15 seconds, pause/resume, reset, close.
- Longevity defaults to a simple presentation mode, with large, direct Today and Training commands and optional details.
- Longevity onboarding can choose Keep it simple vs Show me details.
- Fresh athlete onboarding clears stale manual macro targets so a prior persona's nutrition numbers do not leak into a new persona.
- Longevity Simple nutrition leads with food actions and hides numerical targets behind optional details.
- Remaining consumer-facing IXHUA header state no longer intentionally starts as IXHUA CORE/ADULT.

## Verified automated tests
Command:

    node --test tests/engine.test.cjs tests/ixhua-running.test.cjs tests/ixhua-athlete.test.cjs

Result: 47/47 pass.

Coverage includes:
- 100,000 varied running prescriptions.
- Runner / Strength / Hybrid / General Fitness / Longevity / Custom personas.
- Hybrid priority protection and differentiated strength dose.
- Distinct Upper/Lower A/B exercise selections.
- Longevity simple-presentation default.
- Nutrition target personalization logic.
- Equipment, time-window and schedule constraints.
- Persistence / conflict safeguards in the tested engine surfaces.

Build and syntax checks passed:

    node -c js/app.js
    node -c js/ixhua/athlete-ui.js
    node -c js/ixhua/training.js
    node -c js/ixhua/core.js
    node -c js/ixhua/onboarding.js
    node build.cjs

## Remaining validation boundary
Browser/mobile automation was not re-certified in this environment because Playwright/jsdom dependencies are currently unavailable and dependency installation exceeded the execution window. This checkpoint therefore does NOT claim new physical-iPhone or browser-journey verification for the UI changes. The prior verified Athlete Identity checkpoint remains the recovery ancestor.

This is an implementation checkpoint, not the complete IXHUA Release Candidate.
