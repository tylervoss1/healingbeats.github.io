import type { APIRoute } from 'astro';
import { url, ROUTES } from '../lib/url';

export const GET: APIRoute = ({ site }) => {
  const pages = Object.values(ROUTES)
    .map((path) => `  <url><loc>${new URL(url(path), site).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
