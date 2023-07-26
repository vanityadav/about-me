<script lang="ts">
	import Dock from './Dock.svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

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
		class="fixed bottom-2 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-mobileMenu border m-auto rounded-2xl p-1 w-max"
		transition:fly={{ y: 40, easing: quintInOut }}
	>
		<Dock />
	</header>
{/if}
