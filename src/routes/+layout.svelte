<script lang="ts">
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Vanit Yadav</title>
	<meta
		name="keywords"
		content="Vanit Yadav, oneIT, developer, webd, Web Developer, CSS, JavaScript, Svelte, SvelteKit, React, Software Developer, Software engineer, Html, Ijdro Developer"
	/>
	<meta name="author" content="Vanit Yadav" />
	<meta
		name="description"
		content="Welcome to the professional portfolio of Vanit Yadav, a skilled web developer and team leader. I create web applications that are both visually stunning and responsive. Explore my work and projects to see my innovative projects in action. Contact me to discuss your next web development project."
	/>
</svelte:head>

<Header />
<main class="w-siteWidth m-auto mt-16 max-w-siteWidth mb-32">
	<slot />
</main>
