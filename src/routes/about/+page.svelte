<script lang="ts">
	import Skills from './Skills.svelte';
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Introduction from './Introduction.svelte';
	import Heading from '$lib/content/Heading.svelte';
	import ScrollLink from '$lib/link/ScrollLink.svelte';
	import Social from '$lib/home/Social.svelte';
</script>

<div class="flex sm:gap-10 gap-20 max-sm:flex-col">
	<article class="flex flex-col gap-14 flex-1 h-full sm:sticky sm:top-16">
		<div class="flex flex-col gap-2">
			<Heading>Vanit Yadav</Heading>
			<h2 class="text-xl text-gray-700">Software Engineer</h2>
			<div class="flex gap-2 flex-wrap my-2 text-gray-500 text-xs">
				<span
					class=" px-2 py-1 border rounded-full cursor-pointer hover:border-black hover:text-black"
				>
					Web dev
				</span>
				<span
					class=" px-2 py-1 border rounded-full cursor-pointer hover:border-black hover:text-black"
				>
					MERN
				</span>
				<span
					class=" px-2 py-1 border rounded-full cursor-pointer hover:border-black hover:text-black"
				>
					Team Lead
				</span>

				<span
					class=" px-2 py-1 border rounded-full cursor-pointer hover:border-black hover:text-black"
				>
					Gurgaon, India
				</span>
			</div>
		</div>
		<nav class="hidden sm:flex flex-col gap-4 cursor-pointer">
			<ScrollLink href="#introduction" label="Introduction" />
			<ScrollLink href="#experience" label="Experience" />
			<ScrollLink href="#skills" label="Skills" />
			<ScrollLink href="#education" label="Education" />
		</nav>
		<Social type="icons" />
	</article>
	<div class="flex-[2] flex flex-col gap-8">
		<Introduction />
		<!-- <Experience />
		<Skills />
		<Education /> -->
	</div>
</div>
