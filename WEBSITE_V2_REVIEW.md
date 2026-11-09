# Website 2.0 — Review before publishing

This is a **separate proposed update**, not a live deployment.

## What changed

- Restyled the existing homepage with a dark navy / electric-blue professional identity.
- Preserved all existing homepage sections, IDs and original case-study links.
- Added `automation-hub.html`, a public project showcase inspired by the reference dashboard.
- Included Axiom Mind, German Decode, LinkedIn, Job Discovery, Telegram Trackers, and Daily Briefing without exposing private n8n systems.
- Added homepage and existing case-study navigation to Automation Hub.
- Preserved `CNAME`, `favicon.svg`, `privacy.html`, and each existing case-study page.
- Kept workflow statuses and performance metrics illustrative, not invented live figures.

## Recommended safe publishing process

1. Clone/open the existing repository `viswavisnus8/viswavisnus8.github.io` in GitHub Desktop.
2. Create a new branch named `website-v2-review` based on `main`.
3. Copy the files in this ZIP into the cloned repository folder, preserving the folder structure.
4. Inspect Changes in GitHub Desktop. Confirm `CNAME` and `privacy.html` remain unchanged and that no unrelated files were deleted.
5. Commit and push **only** the review branch.
6. Preview the site locally in a browser using a static file server (relative links work; root-relative ones require a web root) or GitHub Pages preview workflow. Review on mobile before merging.
7. Merge to `main` only after visual approval. Keep GitHub Pages domain configuration unchanged.

## Safety and limitations

This package has been syntax/structure and link-reviewed, but its visual appearance has not been browser-screenshot verified in this environment. It does not connect to n8n or display live analytics. No admin URLs, API keys, or secrets are embedded.

No personal photo was included, because no authorized website photo file was in the uploaded ZIP. A professional portrait can be added later with your approval.
