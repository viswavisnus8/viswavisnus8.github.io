/*
 * OPTIONAL VISITOR ANALYTICS — OFF BY DEFAULT
 * To enable Cloudflare Web Analytics later, paste your site token below.
 * No third-party analytics script loads while the token is empty.
 * See ANALYTICS_SETUP.md before enabling, including privacy obligations.
 * Cloudflare records page views; this alone does NOT provide individual PDF
 * download or Amazon outbound click event counts.
 */
(() => {
  'use strict';
  const CLOUDFLARE_WEB_ANALYTICS_TOKEN = '';
  const token = CLOUDFLARE_WEB_ANALYTICS_TOKEN.trim();
  if (!token) return;
  if (!/^[a-zA-Z0-9_-]{8,128}$/.test(token)) return;
  const beacon = document.createElement('script');
  beacon.defer = true;
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token }));
  document.head.appendChild(beacon);
})();
