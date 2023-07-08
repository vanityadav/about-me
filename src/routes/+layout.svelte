<script lang="ts">
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Vanit Yadav</title>
	<meta
		name="keywords"
		content="Vanit Yadav, oneIT, developer, webd, Web Developer, CSS, JavaScript, Svelte , SvelteKit, React, Software Developer, Software engineer , Html ,Ijdro Developer"
	/>
	<meta name="author" content="Vanit Yadav" />
	<meta
		name="description"
		content="Welcome to the professional portfolio of Vanit Yadav, a skilled front-end developer and team leader. With expertise in React, Next.js, Sevelt, Tailwind CSS and more. I create visually stunning and responsive web applications. Explore my work and projects to see how I bring innovative designs to life. Contact me to collaborate on your next web development venture."
	/>
</svelte:head>

<Header />
<main class="w-desktopWidth m-auto my-8 mt-16 max-w-siteWidth mb-32">
	<slot />
</main>
