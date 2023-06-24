<script lang="ts">
	import Link from '../link/Link.svelte';
	import { slide } from 'svelte/transition';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';

	let showBorder = false;
	let mobileMenu = false;
</script>

<svelte:window on:scroll|once={() => (showBorder = true)} />

<header>
	<div
		class=" max-sm:hidden py-2 sticky top-0 bg-white/40 backdrop-blur-lg"
		class:border-b={showBorder}
	>
		<nav class="w-desktopWidth m-auto flex items-center justify-between gap-8 max-w-siteWidth">
			<Link href="/">Vanit.</Link>
			<div class="flex gap-2 items-center">
				<Link href="/about">About</Link>
				<Link href="/blogs">Blogs</Link>
				<Link href="/projects">Projects</Link>
			</div>
			<PrimaryButton href="/contact">Contact</PrimaryButton>
		</nav>
	</div>

	<div class=" sm:hidden py-2 fixed bottom-0 bg-white/40 backdrop-blur-lg border-t left-0 right-0">
		<nav class="flex items-center justify-between w-desktopWidth m-auto">
			<Link href="/">Vanit.</Link>
			<button on:click={() => (mobileMenu = !mobileMenu)}>Menu</button>
		</nav>
		{#if mobileMenu}
			<div
				transition:slide={{ duration: 400 }}
				class="absolute bottom-[49px] flex flex-col gap-2 bg-white/40 backdrop-blur-lg left-0 right-0 rounded-t-2xl"
				class:border-t={mobileMenu}
			>
				<nav class="flex flex-col gap-2 py-4 justify-between w-desktopWidth m-auto">
					<Link href="/about">About</Link>
					<Link href="/blogs">Blogs</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
				</nav>
			</div>
		{/if}
	</div>
</header>
