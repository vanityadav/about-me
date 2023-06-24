<script lang="ts">
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
</script>

<svelte:head>
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
	<title>Vanit Yadav</title>
	<meta
		name="keywords"
		content="Vanit Yadav, oneIT, developer, webd, Web Developer, CSS, JavaScript, Svelte , SvelteKit, React, Software Developer, Software engineer , Html ,Ijdro Developer"
	/>
	<meta name="author" content="Vanit Yadav" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
