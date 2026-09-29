# Portfolio redesign — first design review

This checkpoint implements the agreed first prototype: Hero, Skills and project laptop experience. It is not the final portfolio release.

## Implemented

- English `/` and Ukrainian `/uk/` static Astro pages.
- Local fonts, dark editorial layout and CSS dimensional hero key.
- Lazy React/Three.js keyboard with 12 selectable technologies, keyboard-accessible HTML controls and a CSS fallback.
- Large CSS laptop shell with five illustrative interactive demos and explicit project switching. Scrolling does not interrupt the selected demo.
- Certificate link and initial About/contact layout. No public phone number.
- Reduced-motion and mobile layouts. Three.js is imported only after the Skills island hydrates and WebGL/reduced-motion checks pass.

## Demonstrations

The laptop interfaces are explicitly labeled interactive simulations. They are newly authored illustrations, not recordings or embedded versions of the original applications. The API uses sample JSON; no production API is contacted. No upload, email or reservation is sent.

After design approval, use actual screen recordings for the Windows application and QEMU, deploy or link verified web demos, and confirm any reusable assets and attribution. Keep the distinction between real demos and simulations visible.

## Remaining after visual approval

- Full public GitHub Lab with curated descriptions and build-time cached metadata.
- Dedicated education timeline and expanded case studies.
- Authentic project recordings/live demos, and a decision about an email form provider.
- Final technology icon artwork, animation polish and cross-device performance measurements.
- Final canonical URL, Open Graph image, sitemap and deployment verification.

The old website is preserved at `backup/pre-redesign-2026-09-29`, commit `553351b722f8284f018fbd4bcda32ca8c46a8bb2`.

## Second visual revision

- Removed hero availability/coordinates/stack metadata, the ticker, work count and non-functional skill arrow.
- Increased navigation, control and supporting text sizes; renamed Stack to Skills.
- Added an explicitly disabled résumé control. No PDF is available yet.
- Enlarged the laptop, added a native modal with Escape/focus handling, and kept all demos clearly labeled simulations.
- Added hotel module navigation, workshop enrollment on all cards, an OS unit calculator, a pricing example based on the Booking API README, and sample media review decisions. These operate only in browser memory.
- Replaced channel branding with YouTubeBot.
- Improved 3D key label contrast and reduced excessive lighting.
- Added an original certificate-themed visual card with Microsoft branding and the existing credential verification link; this is not a scan of the certificate.
- Replaced the ambiguous contact heading link with recognizable contact buttons and an email copy action. Mailto opens the visitor's configured mail client.

Actual hosted project runtimes/recordings remain separate work; these UI improvements do not turn the simulations into original applications. The large lazy Three.js chunk still produces a build size advisory.
