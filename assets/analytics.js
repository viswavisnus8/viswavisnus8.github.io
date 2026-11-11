/*
 * CLOUDFLARE WEB ANALYTICS
 * Cloudflare Web Analytics is enabled for viswavisnus.com.
 * To disable, replace the token below with an empty string.
 * See ANALYTICS_SETUP.md before enabling, including privacy obligations.
 * Cloudflare records page views; this alone does NOT provide individual PDF
 * download or Amazon outbound click event counts.
 */
(() => {
  'use strict';
  const CLOUDFLARE_WEB_ANALYTICS_TOKEN = 'b2ba59df8b8d4a6cbede6706ae565ad1';
  const token = CLOUDFLARE_WEB_ANALYTICS_TOKEN.trim();
  if (!token) return;
  if (!/^[a-zA-Z0-9_-]{8,128}$/.test(token)) return;
  const beacon = document.createElement('script');
  beacon.defer = true;
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token }));
  document.head.appendChild(beacon);
})();
