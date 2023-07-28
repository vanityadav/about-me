<script lang="ts">
	import Social from '../lib/home/Social.svelte';
	import ContextBox from '$lib/content/ContextBox.svelte';
	import Heading from '$lib/content/Heading.svelte';
</script>

<div class="flex flex-col gap-10">
	<div class="flex flex-col gap-2">
		<Heading>Vanit Yadav</Heading>
		<div>
			<ContextBox>
				Hey, I'm
				<b> Software Engineer </b>
				at IJRDO specializing in building web-based applications.
			</ContextBox>
			<ContextBox>
				I possess a deep passion for
				<b>frontend development</b>
				and i love working with tools and technologies, like React, Next.js, SvelteKit, Tailwind CSS,
				TypeScript, Node.js, databases and many
				<a href="/about" class=" hover:underline hover:text-secondary">
					<b> more &#x279A;</b>
				</a>
			</ContextBox>
		</div>
	</div>
	<Social />
</div>
