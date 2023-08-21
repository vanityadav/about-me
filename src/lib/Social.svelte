<script lang="ts">
	import LinkIcon from './LinkIcon.svelte';
	import socials from './socials';
	export let type: 'icons' | 'default' = 'default';
</script>

<div class="flex flex-wrap" class:gap-2={type === 'icons'} class:gap-4={type === 'default'}>
	{#each socials as { href, label, icon } (label)}
		<a
			{href}
			target="_blank"
			rel="external noopener"
			class="p-3 flex items-center gap-6 border border-border rounded-lg flex-1 justify-between hover:bg-wash2"
		>
			<div class="flex items-center gap-4">
				<!-- icon is a hard-coded SVG string from $lib/socials, never user input -->
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html icon}
				<span class="text-label"> {label} </span>
			</div>
			<LinkIcon classname="stroke-2 stroke-current" />
		</a>
	{/each}
</div>
