<script lang="ts">
	import sideProjects from './sideProjects';
</script>

<section class="flex flex-col gap-6">
	<h2 class="text-heading">Side Projects</h2>

	<div class="flex flex-col gap-6">
		{#each sideProjects as { year, link, images, title, description }}
			<div class="flex flex-col sm:flex-row items-start sm:gap-20">
				<p class="text-caption">{year}</p>
				<div class="flex flex-col gap-1">
					<a href={link} target="_blank" class="text-heading hover:underline">{title}</a>
					{@html description}
				</div>
			</div>
		{/each}
	</div>
</section>
