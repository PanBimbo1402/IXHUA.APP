# REBUILD 0.9 delivery report

## Release status

A substantial, runnable upgrade of the original 0.8 codebase. **Not yet production-ready or fully compliant with every item in the requested product brief.** No push, merge, hosting change, production deployment, external account creation or secret configuration occurred.

The largest remaining gate is real-browser/device QA: the managed browser rejected localhost with `ERR_BLOCKED_BY_CLIENT`; a standalone Chromium download also timed out. DOM testing verifies event/state behavior, not visual polish, animation smoothness or mobile layout. No screenshots or browser-pass results are fabricated.

## REBUILD 0.9 changelog / new features

### 0.9.1 anatomy visual patch

- Replaced the flat schematic muscle map with a generated 3D front/back anatomical base.
- Added exercise-aware muscle highlights, supporting-muscle labels, a restrained scan effect and mobile stacking.
- Removed the prominent uncurated-media placeholder. Exercise-specific motion remains explicitly in production rather than being represented by inaccurate generic animation.

### Product identity and mobile interface

- Warm graphite surfaces, restrained lime accents, progression marks, consistent typography and action hierarchy.
- Today prioritizes the next workout, active session, fuel and daily rhythm.
- Focused exercise rows, readable set inputs, collapsible completed exercises, persistent session controls and a rest dock.
- Native dialog bottom sheets with Escape handling/focus return, labeled controls, 44px main touch targets, safe-area spacing and reduced-motion overrides.
- Short completion, sheet and chart motion. No claim of measured 60 FPS performance.
- Settings is available on mobile; the destructive reset shortcut was replaced.

### Training

- 53 structured strength exercises; movement patterns, muscle assignments, equipment, difficulty, cues, errors, rep ranges, rest and load conventions.
- Seven-movement Full Body, six-movement Lower Body and seven-movement Upper Body templates.
- Equipment-aware templates and same-pattern substitutions before sets are completed.
- Start/pause/resume/end lifecycle for strength, running, cardio, mobility and plyometrics. Only one active session at a time.
- Start time, accumulated active duration, sets, reps, load, notes and optional manual distance/effort.
- Active-session refresh persistence; immutable copies of completed sessions; incomplete-session confirmation.
- One-tap previous-set/starting-target fill, completed exercise collapsing and progress count.
- Rest pause/resume/reset, ±15 seconds and optional automatic start after a set. Timer updates do not re-render the app every tick.
- Explainable progression: hold load while building reps, propose a small increase only after all target sets succeed. Benchmark estimates remain explicitly approximate.
- Weight, same-load rep and estimated 1RM PRs from completed history; distance and duration records for run/cardio. First sessions establish baselines rather than falsely celebrating records.
- Session summary: duration, completed exercises/sets, reps, entered-load volume, distance, PRs, prior same-title volume comparison, AI analysis and JSON export.
- Adapt Today changes time budget and set count; equipment comes from preferences. Shortened sessions explicitly prioritize initial compound patterns.
- Consistent muscle diagrams and honest media placeholders. Existing technique-search links are labeled as searches, not curated videos.

### Nutrition and AI

- Calories/protein/carbs/fat consumed, goal and remaining; editable goals.
- Manual food review, servings consumed and portion preview; grams and optional fiber/sugar/sodium.
- Breakfast/lunch/dinner/snacks; recent food, favorites, saved meals and one-tap repeat logging.
- Label/meal photo upload, extraction request, failure states and editable confirmation before logging.
- Barcode image detection when the browser supports it, manual digits fallback, server-side Open Food Facts lookup, product review.
- Vision and AI server boundaries using the Responses API, no client-side provider key.
- Contextual Ask REBUILD on Today, training, exercise, progress, nutrition and summaries. Requests include structured available logs and explicitly missing wearable data.
- AI answers persist locally; no simulated coach answer is presented as live AI.
- Original meal-prep recipes and ingredient grams retained, now explicitly labeled estimates.

### Progress, planning and data

- Completed-session history, volume, time, distance, consistency counts and time-range selection.
- Exercise-specific history, working-weight chart, best logged load and estimated 1RM.
- Weekly primary-muscle set coverage, explicitly not recovery.
- Original body-weight, sleep and benchmark views preserved; chart spacing reflects actual dates.
- Training appointments, weekly session preview, checks against added shifts/events, and moving existing appointments.
- New versioned data key, non-destructive 0.8 copy, local JSON export/import with confirmation.
- Future wearable observation container with no invented measurements.

## Bugs fixed

- No complete workout/session history in 0.8: added lifecycle and snapshots.
- Two-exercise Full Body and three-exercise Lower Body: replaced with balanced patterns.
- Sorted work-shift deletion removed the wrong underlying item: now uses the original object index.
- Stale sleep could appear to be last night's sleep: current-day lookup now requires the selected date.
- Working-weight comparisons counted uncompleted sets: only completed sets contribute.
- Trend windows anchored to the last logged date: now end at the selected date and exclude future entries.
- Equal chart spacing obscured gaps between weigh-ins: charts use date spacing.
- Today task completion depended on row order: stable date/time/title identifiers prevent new schedule items shifting checkmarks.
- Default launch selected the first hard-coded program day: first 0.9 launch uses the local calendar date.
- Dates outside the original program silently fell back to its first day: now show an intentional empty day.
- Language document state remained Spanish after switching back: document language resets.
- User-added plan titles were interpolated into calendar HTML without escaping: escaped.
- Setup shortcut inserted invented benchmark values: now starts with an empty minimal profile.
- Unhandled local-storage writes: visible failure message instead of silently claiming success.
- Reset control could destroy data without review: replaced with settings and export/confirmed restore.
- Old `test.html` was stale and manipulated storage: replaced with a non-destructive test information page.

## Tests actually run

| Test | Result |
|---|---|
| JavaScript syntax / build | Passed |
| 9 domain tests | Passed: template coverage, equipment matching, substitutions, progression success/hold/failure, baseline/real PRs, volume exclusions, portion arithmetic/validation |
| Server checks | Passed: static app served; secrets/server files denied; cross-origin rejection; invalid input; missing AI/vision/database configuration |
| Clean onboarding / all five routes | Passed in JSDOM |
| Full Body start → every set → end → summary | Passed in JSDOM |
| Rest pause, +15, refresh persistence | Passed in JSDOM |
| Exercise details, replacement, workout pause/resume | Passed in JSDOM |
| Progress and body-weight entry | Passed in JSDOM |
| Food serving multiplication, favorite, repeat logging | Passed in JSDOM |
| Label missing-image and barcode unconfigured states | Passed in JSDOM |
| AI unavailable state | Passed against local server in JSDOM |
| Lower Body, mobility, plyo, cardio, scheduled run lifecycle | Passed in JSDOM |
| No-run gate and sorted shift deletion regression | Passed in JSDOM |
| Browser/mobile layout and screenshot verification | BLOCKED, not passed |
| Real camera / barcode detection / image extraction | Not verified with hardware/provider |
| Live AI / real food-database response | Not verified; no configured credentials/contact identity |

No captured application runtime errors in the DOM journey. This does not establish zero browser errors or production readiness. The mobile test script is supplied for execution on a machine with Chromium.

## Architecture changes

A pure domain engine now separates arithmetic and workout selection from rendering. The original application closure and data remain; the 0.9 integration is compiled into that closure to preserve navigation, legacy storage and planning/meal-prep behavior. Screens/styles still contain legacy code and should be modularized after device regression testing. This is not a finished backend migration.

The Node server uses an explicit static-asset allowlist, same-origin checks, request limits, timeouts and environment-only credentials. It binds to localhost by default. **It is a private preview server, not an authenticated public backend.**

Session snapshots can migrate to a future database without inventing past sessions. Local storage remains synchronous and can eventually need IndexedDB or a real persistence layer for larger histories.

## External dependencies

- Node.js 20+ for the local preview and API endpoints.
- OpenAI key + an account-accessible compatible model for live coach and vision.
- Open Food Facts app identity/contact and network access; staging is the default. Data is community-supplied and must be reviewed. Their API requirements and licensing apply.
- Browser image upload; camera permission/HTTPS for device-dependent capture and barcode support.
- Playwright + Chromium for the supplied real-browser tests; JSDOM for DOM tests.
- No Apple Health/Watch, GPS, notifications, authentication, cloud synchronization or physiological recovery connection.

Integration references: [OpenAI Responses reference](https://platform.openai.com/docs/api-reference/responses), [Open Food Facts API documentation](https://openfoodfacts.github.io/openfoodfacts-server/api/).

## Remaining limitations — not hidden

- Full real-browser/mobile visual and interaction verification is outstanding. The professional visual-quality bar cannot be certified from DOM tests.
- High-quality exercise movement media is not supplied; placeholders and technique search are intentional.
- AI/vision and barcode success paths need real service configuration and contract testing. Scanned uncertainty is displayed as field names, not calibrated OCR confidence. No live video scanner on browsers without detection support.
- Units remain lb and mi. Spanish remains partial. Onboarding still includes legacy questions; not every collected field changes training algorithmically.
- Selection uses templates, equipment and experience; goal, frequency, history and recovery are not yet a fully periodized adaptive program. No automated deload cycle or running-pace PR system.
- Short-session adaptation can omit patterns with unavailable equipment; it does not promise a complete equivalent program under every constraint.
- Plan generation checks added shifts/events, but the original September program remains separate. No automatic conflict-free long-term scheduling, natural-language schedule interpretation, or automatic missed-session rescheduling. Existing appointments can be moved manually.
- Muscle coverage counts primary assignments, not all secondary muscle workload. Volume comparisons can be distorted by changed exercises or per-hand conventions.
- Nutrition adherence charts and comprehensive running/cardio analytics are not implemented. AI history is stored but not a full history-management UI.
- Saved-meal capture currently saves the current day's food together; individual multi-food selection/editing is not implemented.
- Nutrition targets are editable defaults, not individualized energy-expenditure estimates. Food preferences inform AI context; recipe rotations are not automatically allergy-filtered.
- Local data has no cross-device sync, account system, background execution guarantee or full offline install cache. Storage quota/corruption and import schema validation need further hardening for production.
- Snapshotting a new session preserves it, but legacy date/title/exercise rows still hold the most recently ended same-day session for old analytics. New history preserves every session.
- No social sharing image; summary JSON provides an export boundary.

## Highest-impact REBUILD 1.0 work

1. Real iPhone/Safari and Android QA; fix visual, keyboard, background timer and accessibility issues before promotion.
2. Curated, consistent exercise media with exercise-specific technique review.
3. Authenticated persistence, secure deployable APIs, migration/backup validation and account isolation.
4. Configure and test live vision/food lookup and context-grounded AI; add verified structured output contracts.
5. Fully unified planning, periodization/deloads, metric units, complete localization and nutrition adherence.
6. Native HealthKit/Watch integration only after the core product and data model are stable.
