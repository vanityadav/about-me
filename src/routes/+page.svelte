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
				Hey, I'm Vanit. I'm
				<b> Software Engineer </b>
				at IJRDO specializing in building web-based applications.
			</ContextBox>
			<ContextBox>
				As the team lead, I am dedicated to guiding my team through projects. I possess a deep
				passion for
				<b>frontend development</b>
				and have gained extensive experience working with various tools and technologies, including React,
				Next.js, Svelte, SvelteKit, Tailwind CSS, TypeScript,Node.js, MongoDB and more.
			</ContextBox>
		</div>
	</div>
	<Social />
</div>
