<script>
	import ContextBox from '$lib/content/ContextBox.svelte';
	import Heading from '$lib/content/Heading.svelte';
</script>

<div class="flex gap-4 max-sm:flex-col">
	<section class="flex flex-col gap-8 flex-1">
		<div class="flex flex-col gap-2">
			<Heading>Vanit Yadav</Heading>
			<h2 class="text-xl text-gray-700">Software Engineer</h2>
			<div class="flex gap-2 flex-wrap my-2 text-gray-500 text-xs">
				<span class=" px-2 py-1 border rounded-full"> MERN </span>
				<span class=" px-2 py-1 border rounded-full"> Gurgaon </span>
			</div>
		</div>
		<nav class="flex flex-col gap-1 cursor-pointer">
			<p class="hover:underline">Introduction</p>
			<p class="hover:underline">Experience</p>
			<p class="hover:underline">Skills</p>
			<p class="hover:underline">Education</p>
		</nav>
	</section>
	<section class="flex-[2]">
		<ContextBox width="full">
			My name is Vanit Yadav, and I am a web developer with approximately one year of experience in
			the field of web development. Hailing from India, I possess a deep passion for frontend web
			development and continuously seek to explore new techniques, tools, and technologies in this
			ever-evolving domain.
		</ContextBox>
		<ContextBox width="full">
			Presently, I am employed at IJRDO, where I actively engage with various tools and frameworks
			such as React, Next.js, Tailwind CSS, TypeScript, Svelte, and SvelteKit. These tools serve as
			the foundation for developing exceptional digital experiences. Furthermore, I hold the
			position of team lead within my organization, responsible for guiding and collaborating with
			my team to consistently achieve outstanding results.
		</ContextBox>
		<ContextBox width="full">
			I take great pride in my ability to stay updated with the latest industry trends and
			continuously enhance my skill set. By combining my technical expertise with a strong drive for
			innovation, I strive to deliver accessible and inclusive products that meet the needs of
			diverse users.
		</ContextBox>
	</section>
</div>
