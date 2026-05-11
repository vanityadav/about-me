<script lang="ts">
	import LinkIcon from '../icons/LinkIcon.svelte';
	import socials from './socials';
	export let type: 'icons' | 'default' = 'default';
</script>

<div class="flex flex-wrap" class:gap-2={type === 'icons'} class:gap-4={type === 'default'}>
	{#each socials as { href, label, Icon } (label)}
		<a
			{href}
			target="_blank"
			rel="external noopener"
			class="p-3 flex items-center gap-6 border border-background-faint rounded-lg flex-1 justify-between hover:bg-background-subtle"
		>
			<div class="flex items-center gap-4">
				<Icon />
				<span class="text-label">{label}</span>
			</div>
			<LinkIcon classname="stroke-2 stroke-current" />
		</a>
	{/each}
</div>
