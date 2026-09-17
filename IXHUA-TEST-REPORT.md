# IXHUA owner acceptance — test evidence

Scope: accepted Running and Athlete Identity checkpoints, plus the owner-only preview/reset wrapper. This is not a full Release Candidate or native-device certification.

| Check actually run | Result |
|---|---|
| Build + engine, Running, Athlete Identity, pairing/launcher and source-receipt tests | **71 passed; 0 failed.** |
| Preserved independent Running mobile journey | **Passed.** Three-day runner priority, actual prescription, 9.15 → 555 seconds, segments, pause/reload, finish, distance/pace/history and separate Cardio route. |
| Preserved Athlete Identity mobile acceptance | **All eight personas passed**, covering all six identities plus beginner/experienced Running and Strength profiles. Real strength logging, rest, pause/reload, summaries and plan feedback are exercised. |
| Paired owner preview in one mobile browser | **Six identities passed in sequence**, using actual questionnaire/engines/persistence: Runner → Strength → Hybrid → General → Longevity → Custom. |
| Repeated-owner controls | **Passed.** Partial-draft reset and cancel, distinct generated plans, four identity surfaces, reload, current-data export, one-round backup, fresh reset, feedback persistence/export and unrelated-data preservation. |
| QR payload verification | **Five URL vectors passed** using an independent decoder. This validates encoded payloads, not an optical iPhone scan. |
| Browser console / failed responses | **No unexpected runtime errors or failed responses** in the executed journeys. Missing live-AI credentials are tested as explicit expected 503 states in the preserved persona suite. |
| Viewports | Actual Chromium rendering at **375×812, 390×844 and 844×390**; owner repeat journey at 390×844 and 844×390. |
| Physical iPhone / Safari / Wi-Fi / camera scan | **Awaiting owner acceptance.** Not substituted with emulation. |
| Native capabilities / live external integration success | **Not claimed.** Separate unfinished or external-dependency gates. |

Raw logs, machine-readable results and selected actual browser captures are under `verification/owner/`. The source-to-answer mapping and full requirements/status matrix are preserved under `docs/`. The accepted engine and onboarding source files were compared against checkpoint `a83eeb03b8ff10dd4b57ce0551f25325a3a7f60f` and are unchanged.

The delivered archive additionally contains `OWNER-VERIFICATION.json`: the exact owner commit, source fingerprint, preserved checkpoint hashes and results from re-extracting and testing the packaged source. `BUILD-IDENTITY.json` records application/launcher file hashes; startup verifies them without needing Git or npm dependencies.

The testing environment cannot establish a connection to the owner's physical iPhone or verify the owner's Windows firewall/network. The supplied launcher discovers that computer's real private address, generates the QR locally, and serves the actual verified code. No invented live phone URL is supplied.
