<script lang="ts">
	import '../app.css';
	import { SITE_URL, PROFILE_IMAGE, AUTHOR } from '$lib/site';

	const title = `${AUTHOR.name} — ${AUTHOR.tagline}`;
	const description = `${AUTHOR.name} is a ${AUTHOR.jobTitle} with 5+ years architecting scalable micro-frontends, design systems, and high-performance web applications in React, Next.js, SvelteKit, and TypeScript. Frontend Architect Award recipient based in ${AUTHOR.location.locality}, India.`;
	const ogImage = `${SITE_URL}${PROFILE_IMAGE}`;
	const ogAlt = `${AUTHOR.name} — ${AUTHOR.tagline}`;

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: AUTHOR.name,
		alternateName: AUTHOR.alternateName,
		url: SITE_URL,
		image: ogImage,
		jobTitle: AUTHOR.jobTitle,
		description,
		email: `mailto:${AUTHOR.email}`,
		telephone: AUTHOR.phone,
		worksFor: { '@type': 'Organization', name: AUTHOR.employer },
		address: {
			'@type': 'PostalAddress',
			addressLocality: AUTHOR.location.locality,
			addressRegion: AUTHOR.location.region,
			addressCountry: AUTHOR.location.country
		},
		sameAs: [AUTHOR.social.github, AUTHOR.social.linkedin],
		knowsAbout: [
			'Frontend Architecture',
			'Micro Frontends',
			'Design Systems',
			'React',
			'Next.js',
			'Svelte',
			'SvelteKit',
			'TypeScript',
			'JavaScript',
			'Redux',
			'TailwindCSS',
			'Web Performance',
			'Accessibility',
			'Web Sockets',
			'CI/CD'
		],
		award: [
			'Frontend Architect Award (Radiansys, 2025)',
			'Excellence in Engineering (Radiansys, 2024)',
			'Rising Star Award (Radiansys, 2023)'
		]
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Vanit Yadav, oneIT, Senior Software Engineer, Frontend Architect, Frontend Developer, Frontend Engineer, Web Developer, React Developer, Next.js Developer, SvelteKit, Svelte, TypeScript, JavaScript, Micro Frontends, Design Systems, Component Library, Redux, TailwindCSS, AG Grid, Storybook, Web Performance, Accessibility, Web Sockets, Real-time, CI/CD, Gurgaon, India, Hire Frontend Engineer, Lead Developer"
	/>
	<meta name="author" content={AUTHOR.name} />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#222222" media="(prefers-color-scheme: dark)" />
	<link rel="canonical" href={SITE_URL} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={AUTHOR.name} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={ogAlt} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={SITE_URL} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={ogAlt} />

	<!-- JSON-LD payload is fully derived from typed `personSchema`; `<` is escaped in the JSON body, and the closing tag uses `\u003c` so the Svelte parser doesn't read a literal `</script>` inside this template literal. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema).replace(/</g, '\\u003c')}\u003c/script>`}
</svelte:head>

<main class="m-auto my-16 max-w-lg text-sm leading-relaxed text-foreground-default">
	<slot />
</main>
