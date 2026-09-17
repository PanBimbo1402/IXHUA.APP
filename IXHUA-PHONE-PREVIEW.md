# IXHUA owner phone preview

Use [START-HERE.md](START-HERE.md) for the simple Windows/iPhone steps.

`START-IXHUA.bat` (Windows) or `START-IXHUA.command` (Mac) runs Node.js 22+, builds the real application, verifies a supplied `BUILD-IDENTITY.json`, starts the actual app and API in one process, checks that process's readiness, and opens the QR page. No runtime npm install is required.

The default owner port is **4319**, separate from earlier builds. Computer control page: **http://127.0.0.1:4319/owner-preview**. The phone QR contains the detected private Wi-Fi/Ethernet address, a temporary pairing token and this build's fingerprint. The launcher does not host or publish a separate demo. Use the physical adapter if several choices appear.

Pairing expires after eight hours or a restart. Scan the new QR after restarting; normal Safari storage persists for the same scheme/address/port. The paired cookie is HttpOnly and SameSite=Strict. Cross-origin requests, public peers and unpaired app/API requests are refused. The QR control page opens only on the computer. Pairing does not create an account or cloud synchronization.

**Owner testing** stays accessible in onboarding and the app. Fresh reset writes an empty state into the actual app's storage key and reloads its real default path, rather than importing a mock profile or another demo. It preserves the feedback record, a single previous-round backup by default and unrelated storage. The empty state prevents the normal legacy migration from re-importing old 0.8 logs during a fresh test. Other open owner tabs reload when this reset occurs.

The source receipt records the clean owner descendant and hashes of all actual app/launcher files. `node scripts/owner-build.cjs --verify` works without Git. Source modification after startup is also flagged in the review panel. The full-RC gate remains separate and incomplete even when this scoped owner preview is ready.

## Troubleshooting

- No QR: connect to a private Wi-Fi/Ethernet network and restart. The launcher never invents an adapter or phone URL.
- Browser did not open: open the computer control page above yourself.
- Phone cannot reach the PC: same home Wi-Fi, computer awake, no guest-network device isolation; allow Node.js on Private networks if Windows asks. Do not disable the firewall.
- Several networks: choose the physical adapter. VPN/virtual adapters can be unreachable.
- Port occupied: close the previous START-IXHUA window and retry. The launcher never stops another application's service.
- Missing Node: install Node.js LTS 22+ using the normal installer; reopen START-IXHUA. PowerShell policy changes are unnecessary.
- Source mismatch: extract a fresh owner ZIP into a new folder. An intentionally edited development copy requires its own verification receipt.

Optional developer overrides in `.env`: `IXHUA_PREVIEW_PORT`, `IXHUA_PREVIEW_ADDRESS` (must match a detected private adapter), or both `IXHUA_PREVIEW_TLS_CERT` and `IXHUA_PREVIEW_TLS_KEY`. HTTPS additionally requires a valid certificate trusted by the phone. None of these overrides is needed for ordinary Athlete Identity acceptance.

The default trusted-LAN HTTP preview is not encrypted. Secure-context camera, full offline installation, and native-only capabilities must not be marked validated by it. There is no hosted temporary HTTPS tunnel configured in this package. The current scope does not require one: actual onboarding, program generation, logs and identity screens run over the paired local preview.

To stop, press Ctrl+C or close the launcher window. The app and backend stop together. No GitHub push, production deployment or native signing takes place.
