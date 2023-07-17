<script lang="ts">
	import Social from '$lib/home/Social.svelte';
	import Heading from '$lib/content/Heading.svelte';
	import ScrollLink from '$lib/link/ScrollLink.svelte';
	import { Experience, Education, Skills, Introduction } from '$lib/about';

	const tags = ['Web Dev', 'MERN', 'Team Lead', 'Gurgaon, India'];
	const aboutNav = [
		{ href: '#introduction', label: 'Introduction' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#education', label: 'Education' }
	];
</script>

<div class="flex flex-col gap-10">
	<article
		class="flex items-start justify-between max-sm:flex-col sm:sticky sm:top-16 bg-white/90 backdrop-blur"
	>
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-2">
				<Heading>Vanit Yadav</Heading>
				<h2 class="text-xl text-gray-700">Software Engineer</h2>
				<div class="flex gap-2 flex-wrap my-2 text-gray-500 text-xs">
					{#each tags as tag}
						<span
							class=" px-2 py-1 border rounded-full cursor-pointer hover:border-black hover:text-black"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
			<!-- <Social type="icons" /> -->
		</div>
		<nav class="hidden sm:flex flex-col gap-4 cursor-pointer min-w-[180px]">
			{#each aboutNav as { href, label }}
				<ScrollLink {href} {label} />
			{/each}
		</nav>
	</article>
	<article class="flex flex-col gap-8">
		<Introduction />
		<Experience />
		<Skills />
		<Education />
	</article>
</div>
