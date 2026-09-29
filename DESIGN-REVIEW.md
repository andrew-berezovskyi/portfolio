# Portfolio redesign — first design review

This checkpoint implements the agreed first prototype: Hero, Skills and project laptop experience. It is not the final portfolio release.

## Implemented

- English `/` and Ukrainian `/uk/` static Astro pages.
- Local fonts, dark editorial layout and CSS dimensional hero key.
- Lazy React/Three.js keyboard with 12 selectable technologies, keyboard-accessible HTML controls and a CSS fallback.
- CSS laptop shell with five illustrative interactive demos and scroll/manual project switching.
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
