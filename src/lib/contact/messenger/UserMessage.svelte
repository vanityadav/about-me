<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col gap-1 self-end" transition:fly={{ y: 100, duration: 300 }}>
	<p class="bg-secondary text-white px-4 py-2 rounded-full w-max relative">
		<span><slot /> </span>
		<svg
			width="17"
			height="24"
			viewBox="0 0 17 24"
			fill="none"
			class="absolute bottom-0 -right-[7px]"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 6V0L0 13C0 13 1.7636 17.2636 3.5 19C5.2364 20.7364 7.13239 23.5 16 23.5H16.5C13.5 22 12.5 20.5 11.5 19C10.2597 17.1395 10 15 10 13V6Z"
				fill="#0078ff"
			/>
		</svg>
	</p>

	<span class="text-xs px-4 self-end">
		{new Intl.DateTimeFormat('default', {
			hour: 'numeric',
			minute: 'numeric'
		}).format(new Date())}</span
	>
</div>
