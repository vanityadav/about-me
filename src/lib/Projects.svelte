<script lang="ts">
	import LinkIcon from './LinkIcon.svelte';
	import projects from './projects';
</script>

<section class="flex flex-col gap-6">
	<h2 class="text-heading font-semibold">Projects</h2>

	<div class="flex flex-col gap-6">
		{#each projects as { link, title, description } (link)}
			<div class="flex flex-col gap-1">
				<a
					href={link}
					target="_blank"
					rel="external noopener"
					class="text-heading hover:underline flex items-center gap-2"
				>
					<span class="text-heading hover:underline">
						{title}
					</span>
					<LinkIcon classname="stroke-2 stroke-current size-2" />
				</a>
				<p>{description}</p>
			</div>
		{/each}
	</div>
</section>
