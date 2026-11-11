# Optional visitor analytics for the Free Library

**Current status:** OFF. No tracking token is included in this repository.

## Cloudflare Web Analytics (free analytics option)

1. Sign in to https://dash.cloudflare.com/ and find Web Analytics.
2. Add your **actual domain** (the existing `CNAME` file currently contains `viswavisnus.com`).
3. Copy the Cloudflare Web Analytics site token provided for that domain.
4. Open `assets/analytics.js` and replace the empty string in:
   `const CLOUDFLARE_WEB_ANALYTICS_TOKEN = '';`
   with the site token.
5. **Before enabling analytics**, review applicable privacy requirements for your
   visitors, including EU/German requirements. Update `privacy.html` to accurately
   name the analytics provider and describe how visitor data is processed; obtain
   consent if required for your specific implementation.
6. Commit and deploy the updated file, then confirm that your analytics dashboard
   receives visits to `library.html` (it does not show visits from before activation).

This method can measure site visitors, page views, referrals and popular pages
where supported by your configuration. It **does not automatically track individual
PDF downloads or Amazon click events**. Those would require a separate analytics
provider/event-tracking plan and further privacy review.

## Google Search Console

Use https://search.google.com/search-console to verify your website property
and monitor search impressions and visits from Google Search. It measures
search visibility, not all visitors.

## Before publishing Kindle links

Only add links to real, authorized Amazon book listings. Links to someone else's
book are not automatically affiliate links. An affiliate program requires
separate approval, disclosures, and the right to operate a business.
