# IXHUA Checkpoint 08 — Support Integration

Owner correction pass: mobility, plyometrics, and easy aerobic finishers are support work attached to the session they support, not competing hard-session appointments.

Implemented:
- Mobility prep remains attached before every planned run/strength session.
- Plyometric primer remains quality-first and appears before eligible first key session when readiness permits.
- Hybrid/strength aerobic finishers now remain available on strength sessions rather than only the first strength session; dose stays conversational and short.
- Today hour-by-hour timeline expands attached support into visible chronological blocks before/after the main workout.
- Training tabs show attached Mobility / Plyometrics / Cardio on the selected day instead of falsely saying the domain is gone.
- Support cards open the parent workout so the user does not chase disconnected appointments.
- Workout detail shows TODAY'S FLOW in order: warm-up → power primer (if prescribed) → main session → Zone 2 finisher (if prescribed).
- Existing active strength workout set logging and automatic rest timer with pause/adjust/reset remain unchanged.

Verification:
- `npm test`: 9/9 passed.
- Athlete + Running + runtime suite: 43/43 passed, including the 100,000 varied-prescription invariant test.
- Mobile Playwright suite could not run in this environment because the `playwright` package is not installed here. This is an environment dependency, not a claimed mobile pass.

No physiological recovery data is fabricated. Mobility/plyometric work remains readiness- and profile-dependent rather than forced on every day.
