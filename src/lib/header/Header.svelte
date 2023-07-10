<script lang="ts">
	import Link from '../link/Link.svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	let mobileMenu = false;
	let oldScroll: number = 0;
	let mobileNav = true;

	const handleScroll = () => {
		if (oldScroll < window.scrollY) {
			mobileNav = false;
		} else {
			mobileNav = true;
		}
		oldScroll = window.scrollY;
	};
</script>

<svelte:window on:scroll={() => handleScroll()} />

{#if mobileNav}
	<header
		class="fixed bottom-4 bg-white/80 backdrop-blur-lg left-0 right-0 z-50 shadow-mobileMenu border w-siteWidth m-auto rounded-xl py-2 max-w-siteWidth"
		class:rounded-2xl={mobileMenu}
		transition:fly={{ y: 40, easing: quintInOut }}
	>
		{#if mobileMenu}
			<nav
				transition:slide={{ duration: 400 }}
				class="flex flex-col gap-2 py-4 justify-between w-siteWidth m-auto"
			>
				<Link onClick={() => (mobileMenu = false)} href="/about">about</Link>
				<Link onClick={() => (mobileMenu = false)} href="/blogs">blogs</Link>
				<Link onClick={() => (mobileMenu = false)} href="/projects">projects</Link>
				<Link onClick={() => (mobileMenu = false)} href="/contact">contact</Link>
			</nav>
		{/if}
		<nav
			class="flex items-center justify-between w-siteWidth m-auto py-2"
			class:border-t={mobileMenu}
		>
			<Link href="/" onClick={() => (mobileMenu = false)}>V / Y</Link>
			<div class="flex gap-2 items-center max-sm:hidden">
				<Link href="/about">about</Link>
				<Link href="/blogs">blogs</Link>
				<Link href="/projects">projects</Link>
				<Link href="/contact">contact</Link>
			</div>
			<button on:click={() => (mobileMenu = !mobileMenu)} class="sm:hidden px-4 py-1">Menu</button>
		</nav>
	</header>
{/if}

{#if mobileMenu}
	<div
		role="none"
		class="sm:hidden fixed inset-0 z-40 bg-white/10 backdrop-blur-sm"
		transition:fade={{ duration: 200 }}
		on:click={() => (mobileMenu = false)}
	/>
{/if}
