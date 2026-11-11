# VISWAVISNUS Website + Free Reading Library

This repository is an update to the existing portfolio, not a replacement.
It retains the current homepage, Automation Hub, project case studies, privacy
policy, favicon, and `CNAME` setting.

## New pages

- `library.html` — free digital library with search and topic filters.
- `read.html?guide=job-search` — browser PDF reader for the career starter kit.
- `read.html?guide=productivity` — browser PDF reader for the productivity guide.
- `read.html?guide=interview` — browser PDF reader for the interview guide.
- `books/` — three original beginner-level educational PDF guides.
- `assets/library.css` — responsive, mobile-first styles for library and reader.
- `assets/library.js` and `assets/reader.js` — client-side interface logic.
- `assets/analytics.js` — optional Cloudflare Web Analytics integration, OFF by default.

## Publishing on GitHub Pages

1. Before deployment, back up the currently live repository or deploy to a staging branch.
2. Upload the *contents* of this repository into the existing GitHub Pages repository, preserving `CNAME`.
3. Commit and push changes. If Pages deploys from GitHub Actions, wait for the workflow to complete; if from a branch, allow it to publish.
4. Check `/`, `/library.html`, and `/read.html?guide=job-search` under your domain; open and download all three PDFs.
5. Check navigation and book cards on mobile, then configure analytics if wanted.

No database, payment processor, Amazon affiliate links, KDP integration, or n8n changes are required for the free library.

## Privacy and analytics

Analytics is disabled by default because a site-specific Cloudflare token is required.
See `ANALYTICS_SETUP.md` for setup and important privacy considerations. Do not claim
actual visitor counts until analytics is configured and collecting data.

## Amazon Kindle section

This is deliberately marked **Coming later**. Do not add Buy buttons, payment
claims or affiliate links until a genuine book listing is live and business/legal
permissions have been reviewed. If a book is in KDP Select, review exclusivity
requirements before distributing its full digital content on your site.

## PDF notes

The three PDFs are original starter guides rather than comprehensive paid books.
They are provided free for personal education, without requiring user data.
Check all specific factual claims and keep the content updated as needed.
