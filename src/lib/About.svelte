<script lang="ts">
	import LinkIcon from '../icons/LinkIcon.svelte';
	import { RESUME_PATH } from './site';
</script>

<section class="flex flex-col gap-2">
	<p class="mb-3">
		I like
		<a class="links" href="/bio"> design & code. </a>

		I have a deep passion for
		<b>web development</b>
		and love crafting fast, accessible interfaces, design systems, and micro-frontends with React, Next.js,
		SvelteKit, Tailwind CSS, TypeScript, Node.js, Go, SQL, and many
		<a
			href={RESUME_PATH}
			title="View Resume"
			target="_blank"
			rel="external noopener"
			class="links flex items-center gap-1 font-semibold"
		>
			more <LinkIcon classname="stroke-2 stroke-current size-2" />
		</a>
	</p>
</section>
