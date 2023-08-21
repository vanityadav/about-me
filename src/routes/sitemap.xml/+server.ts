import projects from '$lib/projects';
import { SITE_URL, RESUME_PATH } from '$lib/site';

export const prerender = true;

type SitemapUrl = {
	loc: string;
	lastmod?: string;
	changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority?: string;
};

export function GET() {
	const today = new Date().toISOString().split('T')[0];

	const urls: SitemapUrl[] = [
		{
			loc: `${SITE_URL}/`,
			lastmod: today,
			changefreq: 'monthly',
			priority: '1.0'
		},
		{
			loc: `${SITE_URL}${RESUME_PATH}`,
			lastmod: today,
			changefreq: 'monthly',
			priority: '0.8'
		},
		...projects.map(({ link }): SitemapUrl => {
			const loc = link.endsWith('/') ? link : `${link}/`;
			return {
				loc,
				lastmod: today,
				changefreq: 'monthly',
				priority: '0.7'
			};
		})
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => formatUrl(u)).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

function formatUrl({ loc, lastmod, changefreq, priority }: SitemapUrl): string {
	const lines = [`    <loc>${escapeXml(loc)}</loc>`];
	if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
	if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
	if (priority) lines.push(`    <priority>${priority}</priority>`);
	return `  <url>\n${lines.join('\n')}\n  </url>`;
}

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
