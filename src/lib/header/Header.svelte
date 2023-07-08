<script lang="ts">
	import Link from '../link/Link.svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';

	let showBorder = false;
	let mobileMenu = false;
	let oldScroll: number = 0;
	let mobileNav = true;

	const handleScroll = () => {
		showBorder = true;
		if (oldScroll < window.scrollY) {
			mobileNav = false;
		} else {
			mobileNav = true;
		}
		oldScroll = window.scrollY;
	};
</script>

<svelte:window on:scroll={() => handleScroll()} />

<header>
	<div
		class=" max-sm:hidden fixed bottom-4 bg-white/80 backdrop-blur-lg left-0 right-0 z-50 shadow-mobileMenu border w-desktopWidth max-w-siteWidth m-auto rounded-xl py-4"
	>
		<nav class="w-desktopWidth m-auto flex items-center justify-between gap-8 max-w-siteWidth">
			<Link href="/">V / Y</Link>

			<div class="flex gap-2 items-center">
				<Link href="/about">about</Link>
				<Link href="/blogs">blogs</Link>
				<Link href="/projects">projects</Link>
			</div>
			<PrimaryButton href="/contact">Contact</PrimaryButton>
		</nav>
	</div>
	{#if mobileNav}
		<div
			class="sm:hidden fixed bottom-4 bg-white/80 backdrop-blur-lg left-0 right-0 z-50 shadow-mobileMenu border w-desktopWidth m-auto rounded-xl py-2"
			class:rounded-2xl={mobileMenu}
			transition:fly={{ y: 40, easing: quintInOut }}
		>
			{#if mobileMenu}
				<nav
					transition:slide={{ duration: 400 }}
					class="flex flex-col gap-2 py-4 justify-between w-desktopWidth m-auto"
				>
					<Link onClick={() => (mobileMenu = false)} href="/about">about</Link>
					<Link onClick={() => (mobileMenu = false)} href="/blogs">blogs</Link>
					<Link onClick={() => (mobileMenu = false)} href="/projects">projects</Link>
					<Link onClick={() => (mobileMenu = false)} href="/contact">contact</Link>
				</nav>
			{/if}
			<nav
				class="flex items-center justify-between w-desktopWidth m-auto py-2"
				class:border-t={mobileMenu}
			>
				<Link href="/" onClick={() => (mobileMenu = false)}>V / Y</Link>
				<button on:click={() => (mobileMenu = !mobileMenu)}>Menu</button>
			</nav>
		</div>
	{/if}

	{#if mobileMenu}
		<div
			role="none"
			class="sm:hidden fixed inset-0 z-40 bg-white/10 backdrop-blur-sm"
			transition:fade={{ duration: 200 }}
			on:click={() => (mobileMenu = false)}
		/>
	{/if}
</header>
