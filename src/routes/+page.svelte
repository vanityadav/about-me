<script lang="ts">
	import Social from '$lib/social/Social.svelte';

	const tags = ['design & code', 'MERN', 'Gurgaon, India'];
</script>

<div class="flex flex-col gap-10">
	<div class="flex flex-col gap-2">
		<h1 class="text-4xl sm:text-5xl my-2">Vanit Yadav</h1>
		<!-- <div class="flex gap-2 flex-wrap my-2 text-gray-500 text-xs">
			{#each tags as tag}
				<span class=" px-2 py-1 border rounded-full hover:text-black">
					{tag}
				</span>
			{/each}
		</div> -->
		<div>
			<p class="leading-relaxed">
				Hey, I'm
				<b> Software Engineer </b>
				at IJRDO specializing in building web-based applications.
			</p>
			<p class="leading-relaxed">
				I possess a deep passion for
				<b>frontend development</b>
				and i love working with tools and technologies, like React, Next.js, SvelteKit, Tailwind CSS,
				TypeScript, Node.js and many
				<a
					href="/resume/Vanit+Yadav+CV.pdf"
					title="View Resume"
					target="_blank"
					class=" hover:underline hover:text-secondary"
				>
					<b> more &#x279A;</b>
				</a>
			</p>
		</div>
	</div>
	<Social />
</div>
