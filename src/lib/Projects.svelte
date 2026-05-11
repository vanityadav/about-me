<script lang="ts">
	import LinkIcon from '../icons/LinkIcon.svelte';
	import projects from './projects';
</script>

<section class="flex flex-col gap-6">
	<h2 class="text-foreground-strong font-semibold">Projects</h2>

	<div class="flex flex-col gap-5">
		{#each projects as { link, title, description } (link)}
			<div class="flex flex-col gap-1">
				<a
					href={link}
					target="_blank"
					rel="external noopener"
					class="text-foreground-strong links flex items-center gap-2"
				>
					<span>
						{title}
					</span>
					<LinkIcon classname="stroke-2 stroke-current size-2" />
				</a>
				<p>{description}</p>
			</div>
		{/each}
	</div>
</section>
