<script lang="ts">
	import LinkIcon from '../icons/LinkIcon.svelte';
	import socials from './socials';
	import { resolve } from '$app/paths';
</script>

<div class="flex flex-col gap-5">
	<p>
		You can
		<a class="links" href={resolve('/blogs')}> read my writing</a>
		or code, or connect with me on LinkedIn. Reach out for a chat or a coffee.
	</p>

	<div class="flex flex-wrap gap-2">
		{#each socials as { href, label, Icon } (label)}
			<a
				{href}
				target="_blank"
				rel="external noopener"
				class="p-3 flex gap-2 items-center border border-background-faint rounded-lg flex-1 justify-between hover:bg-background-subtle"
			>
				<div class="flex items-center gap-4">
					<Icon />
					<span class="text-label">{label}</span>
				</div>
				<LinkIcon classname="stroke-2 stroke-current" />
			</a>
		{/each}
	</div>
</div>
