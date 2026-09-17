# Phone-preview security scope

This is a temporary development preview, not an authenticated production platform. It has no production user accounts, cloud authorization model or native secure storage. Production security remains PARTIAL.

## Controls implemented and exercised

- Application, assets and API routes require an owner pairing cookie in START-IXHUA mode.
- Invitations use server-generated 192-bit random tokens; sessions use separate random 256-bit IDs. Cookies are HttpOnly and SameSite=Strict, with Secure added in HTTPS mode.
- Invitation fragments are removed from browser history before the pairing request; redirects use no token-bearing query string.
- Links and sessions expire after eight hours and after process restart.
- Pairing rejects malformed bodies, unsupported content types, oversized payloads, wrong tokens/build IDs and excessive attempts.
- Host, Origin and local peer checks reject cross-origin/DNS-host substitutions and non-local peers. Forwarding headers do not grant access.
- The QR control page is loopback-only, uses a restrictive content security policy, and embeds its QR locally. It does not send invitations to a QR SaaS.
- The original asset allowlist continues to deny `.env`, server source, package/config files and private-key paths after pairing.
- No provider secret is returned by status or health endpoints. Merely configured credentials do not count as a live integration pass.
- A busy preview port is not hijacked, reused or killed. Failed startup never becomes a ready preview.
- The archive excludes real environment files, keys/certificates, node_modules, caches, logs and runtime test records.

## Limits and unresolved checks

HTTP on a LAN is not encrypted. Pairing access control does not protect against someone who can observe that network traffic. Use trusted-network test data or a correctly trusted HTTPS setup. This change does not disable firewall rules, install certificate profiles, bypass certificate validation or publish a tunnel.

The legacy `npm start` server remains an unpaired localhost developer path. Do not expose it publicly. The existing live AI/image provider and product lookup integrations have not been exercised with real credentials in this change.

No production penetration test, dependency-CVE audit, mobile binary review, multi-user isolation test or native credential-storage verification was performed. There is no claim of zero vulnerabilities or production readiness. Real Windows/iPhone networking, certificate trust and Safari cookie behavior remain device-test requirements.
