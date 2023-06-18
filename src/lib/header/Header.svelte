<script>
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import Link from '../link/Link.svelte';

	let showBorder = false;
	const handleHeader = () => {
		showBorder = true;
	};
</script>

<svelte:window on:scroll|once={handleHeader} />

<header class="py-2 sticky top-0 bg-white/30 backdrop-blur-lg" class:border-b={showBorder}>
	<div class="w-desktopWidth m-auto flex items-center justify-between gap-8">
		<Link href="/">Vanit.</Link>
		<nav class="flex gap-8">
			<Link href="/about">About</Link>
			<Link href="/blogs">Blogs</Link>
			<Link href="/works">Works</Link>
			<PrimaryButton>Contact</PrimaryButton>
		</nav>
	</div>
</header>
