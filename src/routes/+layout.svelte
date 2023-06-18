<script>
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
</script>

<div class="w-desktopWidth m-auto">
	<Header />
	<slot />
</div>
