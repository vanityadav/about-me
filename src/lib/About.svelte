<script lang="ts">
	import Social from './Social.svelte';
	import { RESUME_PATH } from './site';
</script>

<section class="flex flex-col gap-2">
	<h2 class="text-heading font-semibold">About</h2>
	<p class="mb-3">
		I like design & code. I have a deep passion for
		<b>frontend web development</b>
		and love crafting fast, accessible interfaces, design systems, and micro-frontends with React, Next.js,
		SvelteKit, Tailwind CSS, TypeScript, Node.js, and many
		<a
			href={RESUME_PATH}
			title="View Resume"
			target="_blank"
			rel="external noopener"
			class="hover:underline hover:text-secondary"
		>
			<b>more &#x279A;</b>
		</a>
	</p>
	<Social />
</section>
