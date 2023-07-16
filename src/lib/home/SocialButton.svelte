<script lang="ts">
	export let href: string;
	export let label: string;
	export let type: 'icons' | 'default' = 'default';
</script>

{#if type === 'default'}
	<a
		{href}
		target="_blank"
		class="p-4 flex items-center gap-6 border rounded-md flex-1 hover:bg-gray-50"
	>
		<div class="flex items-center gap-4">
			<slot />
			<span class="whitespace-nowrap"> {label} </span>
		</div>
		<svg height="14" width="14" viewBox="0 0 32 32" stroke="black" stroke-width="1">
			<path
				d="m26.68 3.867h-18.505a1 1 0 0 0 0 2h16.544l-20.519 20.52a1 1 0 1 0 1.413 1.413l20.52-20.52v16.545a1 1 0 0 0 2 0v-18.504a1.456 1.456 0 0 0 -1.453-1.454z"
				fill="rgb(0,0,0)"
			/>
		</svg>
	</a>
{:else}
	<a {href} target="_blank" class="p-2 flex items-center border rounded-md hover:bg-gray-50">
		<slot />
	</a>
{/if}
