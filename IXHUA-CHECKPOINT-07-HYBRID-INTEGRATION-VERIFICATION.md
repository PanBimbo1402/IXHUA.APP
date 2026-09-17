# IXHUA CHECKPOINT 07 — HYBRID INTEGRATION FIX

## What changed

- Hybrid Running and Strength are both treated as core modalities. Selecting Running Priority, Equal, or Strength Priority no longer demotes the other Hybrid modality to disposable support work.
- Hybrid demand generation no longer assumes every selected day automatically creates two usable appointments just because split sessions are allowed.
- With 3 single-session training days and Equal Hybrid, the extra weekly slot alternates between Running and Strength across weeks instead of permanently short-changing one side.
- With 3 days and one allowed split day, Equal Hybrid can schedule 2 Running + 2 Strength sessions when the day windows allow it.
- Same-day split scheduling now searches for a valid start at least 3 hours from the other session instead of selecting a too-close time and then rejecting the day.
- Optional/support work that cannot fit no longer floods the user with omission warnings. Core Hybrid conflicts remain explicit.
- Plan engine migration version bumped so existing stale Hybrid plans are regenerated on next load when no workout is active.

## Tests

Current non-browser suite result: 51 passing tests before the environment-only phone-preview dependency failure.

The phone-preview test could not run in this container because `jsdom` is not installed. This is an environment dependency limitation, not counted as a passing browser test.

New regression coverage includes:

- 3-day Equal Hybrid preserves both modalities each week.
- 3-day Equal Hybrid alternates the extra single-session slot across weeks.
- 3-day Equal Hybrid with split-session permission schedules 2 Running + 2 Strength core sessions.
- Hybrid core Running and Strength demands remain `key` across Running / Equal / Strength priorities.
- Existing six-day Hybrid remains 3 Running + 3 Strength.
- 100,000 varied running prescriptions still pass.
