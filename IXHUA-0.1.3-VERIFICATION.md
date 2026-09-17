# IXHUA 0.1.3 — Verification

## Scope
This correction preserves the working IXHUA 0.1 Today/navigation foundation and changes only Hybrid scheduling, week personalization, compact date presentation, and the planner migration required to rebuild older saved weeks.

## Owner-requested invariants implemented
- A short low-stress Easy Run (up to 45 minutes) may share a day with one strength session when split sessions are enabled and starts are separated by at least 3 hours.
- A long/high-demand run owns its day; the planner does not stack strength or Combat Conditioning on it.
- A day never contains two strength sessions.
- Upper/Lower architecture must alternate strength families chronologically: Upper cannot follow Upper, and Lower cannot follow Lower. The next same-family session requires an opposite-family strength session between them.
- Dedicated Core / Combat Conditioning remains a real core session rather than being silently removed to make room.
- Equal or Strength-first Hybrid with a dedicated hard-conditioning day avoids automatically duplicating hard running intervals; an eligible run is converted to easy aerobic work. Running-first keeps running-specific quality work.
- Users can review and personalize the generated week before entering the normal app flow, and can reopen **Personalize this week** from Plan later.
- User edits are validated against the same core rules: work/life conflicts, long-run ownership, one strength/day, one run/day, supported easy-run doubles, 3-hour split separation, and Upper/Lower alternation.
- Visible schedule dates use compact labels such as `WED 17` instead of raw ISO strings such as `2026-09-17`.
- Saved plans from the previous engine version are regenerated through planner version 14.

## Automated verification
Command:

```text
node --test tests/engine.test.cjs tests/ixhua-running.test.cjs tests/ixhua-athlete.test.cjs tests/owner-corrections.test.cjs
```

Result: **66 / 66 PASS, 0 failures**.

The suite includes the existing **100,000 generated running-prescription property cases**, plus regression coverage for:
- Today navigation/state reset
- Hybrid same-day collision rules
- Easy Run + strength pairing
- Long-run own-day behavior
- dedicated Combat Conditioning preservation
- duplicate running-intensity management when conditioning is enabled
- Upper/Lower chronological alternation over multi-week generation
- Some-experience strength depth
- week-personalization/compact-date wiring

Syntax checks passed for the modified training, athlete UI, onboarding, and bridge modules, and `node build.cjs` completed successfully.

## Research basis and implementation limits
The planning model treats concurrent strength/endurance work as viable and manages session order, fatigue, and total high-intensity exposure rather than assuming that all cardio impairs strength. Relevant evidence includes concurrent-training reviews/meta-analyses (PMID 22002517, 28783467, 38187085, 41762427) and combat-sport HIIT reviews (PMID 30431531, 31904713). MMA-specific demands are heterogeneous (PMID 32783581), so IXHUA does not present one interval protocol or one weekly calendar as universally optimal.

The exact 3-hour same-day separation threshold, exact scheduling score, and individual interval presets are **IXHUA implementation guardrails**, not claims of universal physiological cutoffs. The app should continue adapting them from athlete context and future evidence.

## Device/UI status
This pass was not validated on a physical iPhone in this environment. A current local Chromium pass was also blocked by environment policy for local/file URLs. The automated planner/regression suite and build checks passed, but **physical iPhone owner acceptance remains the final UI gate** for the new week editor and same-day presentation.

Nothing in this document should be read as claiming a physical-device test that did not occur.
