# START HERE — IXHUA 0.1.3

1. **Extract the ZIP** into its own folder.
2. Double-click **START-IXHUA.bat**.
3. Leave the terminal window open.
4. Connect iPhone and PC to the same trusted Wi-Fi.
5. Scan the QR displayed on the PC and open it in Safari.

If Windows asks about Node.js network access, allow it on your trusted **Private network**. Node.js 22+ is required. No npm commands are needed for normal owner testing.

## First acceptance sequence

Test this exact navigation loop first:

**Training → Today → Nutrition → Today → Plan → Today → Progress → Today**

Every press of **Today** must produce the real Today screen with the **Hour by hour** timeline. It must not show content from the tab you just left.

Then test:

- swipe the top rail left/right across the next 21 days;
- select a Strength day and open the workout;
- select a Running day and open the run;
- inspect Mobility / Plyometrics / Cardio on appropriate days and verify each opens its own block;
- check that Upper/Lower A and B are different and appropriately deep for the selected experience;
- inspect Plan on iPhone: one selected day at a time, not a desktop seven-column calendar squeezed onto the phone;
- confirm work/life events appear chronologically with training on Today.

Use **Owner testing → Start fresh test** when you deliberately want to repeat onboarding from scratch.

IXHUA 0.1.3 is an owner-acceptance build, not the final native release. Do not treat unavailable native/watch/cloud/credential-dependent features as validated by this browser build.
