<script>
	export let multi = false;
	import { fly } from 'svelte/transition';
</script>

{#if multi}
	<div class="flex flex-col gap-1" transition:fly={{ y: 100, duration: 300 }}>
		<p class="bg-active px-4 py-2 rounded-3xl whitespace-break-spaces">
			<span> <slot /></span>
		</p>
	</div>
{:else}
	<div class="flex flex-col gap-1" transition:fly={{ y: 100, duration: 300 }}>
		<p class="bg-active px-4 py-2 rounded-3xl whitespace-break-spaces relative">
			<span> <slot /></span>
			<svg
				width="17"
				height="24"
				viewBox="0 0 17 24"
				class="absolute bottom-0 -left-[7px]"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.99995 6.5V0.5L17 13.5C17 13.5 15.2364 17.7636 13.5 19.5C11.7636 21.2364 9.86761 24 1 24H0.5C3.5 22.5 4.5 21 5.5 19.5C6.74035 17.6395 6.99995 15.5 6.99995 13.5V6.5Z"
					fill="#e9e9eb"
				/>
			</svg>
		</p>

		<span class="text-xs px-4">
			{new Intl.DateTimeFormat('default', {
				hour: 'numeric',
				minute: 'numeric'
			}).format(new Date())}</span
		>
	</div>
{/if}
