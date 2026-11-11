import type { APIRoute } from 'astro';
import { url } from '../lib/url';
import { ALLOW_INDEXING } from '../config';

export const GET: APIRoute = ({ site }) => {
  const rules = ALLOW_INDEXING ? 'Allow: /' : 'Disallow: /';
  const body = `User-agent: *\n${rules}\n\nSitemap: ${new URL(url('/sitemap.xml'), site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
