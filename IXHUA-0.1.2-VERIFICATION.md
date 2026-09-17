# IXHUA 0.1.2 — Verification

This correction preserves the verified IXHUA 0.1/0.1.1 Today/navigation baseline and adds explicit Hybrid core/conditioning programming.

## Added
- Hybrid onboarding question: dedicated Core + Athletic Conditioning day.
- Conditioning focus: General / Combat / MMA / Grappling / Striking.
- Conditioning experience and preferred modality.
- Dedicated trunk/core toggle.
- Recovery-mobility-day preference.
- Combat/Athletic Conditioning prescription with scalable interval templates.
- Dedicated conditioning does not replace Running or Strength.
- Hard conditioning is separate from Zone 2.
- Recovery mobility can be placed on an otherwise open recovery day without consuming a core training slot.

## Safety / methodology
The app does not call one protocol a universal "lactate-system" solution. Combat sports are intermittent and HIIT can improve relevant aerobic/anaerobic performance, but protocol details vary. Current interval presets are implementation choices documented in `IXHUA-CONDITIONING-METHODOLOGY-v0.1.2.md`.

## Automated checks
- Core engine suite
- Owner correction suite
- Athlete + Running regression suite
- 100,000 generated Running prescription checks
- Syntax/build checks
- Hybrid simulation including 3 runs, 3 strength-side requests, one dedicated combat-conditioning day, mobility/plyo support and Zone 2 finishers

Browser/physical-iPhone acceptance remains the owner's final UI gate.
