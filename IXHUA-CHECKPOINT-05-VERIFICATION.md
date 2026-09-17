# IXHUA CHECKPOINT 05 — TODAY / HYBRID / THREE-WEEK PLAN

Owner correction targets:
- Restore REBUILD's useful Today mental model using IXHUA identity, not REBUILD branding.
- Three visible weeks on Today/Training and Plan, with clear separation.
- Hour-by-hour life + training timeline restored and backed by the same plan.
- Legacy owner work schedule is migrated into IXHUA only when no explicit shifts are already saved.
- Hybrid constrained-week planning must preserve both running and strength instead of silently deleting one domain.
- Equal Hybrid must expose upper + lower strength variation, not lower-only scheduling.
- Existing stored plans are rebuilt once with planEngineVersion 5 so the correction is visible without repeating onboarding.

No native/Watch/AI claims are made by this checkpoint.

## Verification run

- `node -c` passed for athlete UI, training engine and bridge migration.
- `node build.cjs` passed.
- 48/48 engine + athlete + running tests passed.
- Includes the 100,000 varied running-prescription invariant test.
- New acceptance coverage proves a constrained Hybrid week retains both running and strength, and a 4-day Equal Hybrid week includes both running plus Upper/Lower strength exposure.

## Owner-visible correction behavior

- 3 separated weeks are visible at the top of Today and Training.
- Plan renders three weeks at once.
- Today restores the REBUILD mental model: week context, main focus, schedule/work state, completion state, and the hour-by-hour life + training timeline, redesigned with IXHUA styling.
- Existing saved work shifts win. If no explicit work schedule exists, the owner schedule already present in the legacy REBUILD data is migrated as life context so work appears in Today and constrains the planner.
- Existing stale owner plans are rebuilt once by `planEngineVersion = 5` so Hybrid corrections appear without forcing onboarding again.
- Hybrid allocation no longer allows all available slots to be consumed by one domain. Running-first, equal, and strength-first preserve both goals while changing the ratio.
- Strength ordering no longer promotes Lower A/B ahead of Upper A/B merely because lower sessions are high demand.
- Repeated conflict cards are collapsed to one actionable plan-rebuild message rather than a wall of diagnostics.

Physical iPhone layout remains owner-acceptance validation; this environment did not claim native-device validation.
