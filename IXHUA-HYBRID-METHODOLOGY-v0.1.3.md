# IXHUA 0.1.3 — Hybrid Scheduling Methodology

## Product rule
IXHUA treats Hybrid as one concurrent program, not as independent running and lifting calendars pasted together.

### 1. Easy runs can share a day with strength
For an athlete who explicitly allows split sessions, an easy conversational run up to 45 minutes may share a day with one strength appointment when session starts are at least 3 hours apart. This is an implementation guardrail, not a claim that 3 hours is a universal biological threshold. Same-day concurrent training can produce useful endurance and strength adaptations, while training order and total fatigue matter more when high-intensity work is crowded together.

### 2. Long / high-demand runs own their day
Long runs and high-demand running sessions are kept separate from strength in this build. This protects the purpose of the session and avoids turning a key endurance day into an accidental multi-stressor day.

### 3. Dedicated conditioning changes the running-intensity budget
When Hybrid priority is Equal or Strength-first and the athlete explicitly requests a dedicated hard conditioning day, IXHUA does not also force a running-interval session into the same week. The quality run is converted to easy running while the long run remains. Running-first athletes retain running-specific quality work.

This is a programming decision based on managing the week's total high-intensity dose. It is not a universal statement that runners should never combine intervals and conditioning.

### 4. Upper / Lower may not repeat back-to-back
For Upper/Lower architecture, chronological strength appointments must alternate families:

Upper → Lower → Upper → Lower

A/B variations rotate inside that rule. A second Upper cannot directly follow an Upper, and a second Lower cannot directly follow a Lower, even across week boundaries.

### 5. Dedicated combat conditioning
Combat-conditioning presets are experience-scaled starting prescriptions. The current Some Experience air-bike prescription remains 20 seconds hard / 40 seconds easy × 10, with repeatable effort rather than an all-out first interval. It is an IXHUA implementation choice, not a universal MMA work:rest law.

### 6. User-edited weeks
Before accepting a new program, and later from Plan, the athlete can move training appointments. The accepted schedule becomes the source used by Today, Training and Plan. The editor enforces these guardrails:
- one strength appointment per day;
- Upper and Lower alternate;
- one run per day;
- long/high-demand runs own their day;
- easy runs up to 45 minutes may pair with one strength or dedicated conditioning session;
- split-session starts are at least 3 hours apart;
- saved work/life commitments cannot be overlapped silently.

## Evidence base used for this scheduling pass
- Schumann M, et al. *Maximizing Adaptations in Concurrent Training: An Umbrella Review of Meta-analyses.* 2025. PMID: 41762427.
- Eddens L, et al. *The physiological effects of concurrent strength and endurance training sequence: A systematic review and meta-analysis.* 2018. PMID: 28783467.
- Wilson JM, et al. *Concurrent training: a meta-analysis examining interference of aerobic and resistance exercises.* 2012. PMID: 22002517.
- Chen Y, et al. *Comparative efficacy of concurrent training types on lower limb strength and muscular hypertrophy: A systematic review and network meta-analysis.* 2024. PMID: 38187085.
- Franchini E, Cormack S, Takito MY. *Effects of High-Intensity Interval Training on Olympic Combat Sports Athletes' Performance and Physiological Adaptation: A Systematic Review.* 2019. PMID: 30431531.
- Vasconcelos BB, et al. *Effects of High-Intensity Interval Training in Combat Sports: A Systematic Review with Meta-Analysis.* 2020. PMID: 31904713.
- Kirk C, et al. *The physical demands of mixed martial arts: A narrative review using the ARMSS model to provide a hierarchy of evidence.* 2020. PMID: 32783581.

## Important limitation
The evidence supports principles such as concurrent training viability, the importance of fatigue management, and the usefulness of HIIT in combat-sport populations. It does not validate one exact weekly calendar, one exact interval ratio, or one exact separation time for every athlete. IXHUA therefore labels those details as implementation rules and keeps them editable by the athlete.
