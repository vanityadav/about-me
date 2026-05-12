<script lang="ts">
	import LinkIcon from '../icons/LinkIcon.svelte';
	import { AUTHOR, RESUME_PATH } from './site';
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
	const yearsOfCoding = year - 2021;
</script>

<div class="flex flex-col gap-5">
	<p>
		I like
		<a class="links" href={resolve('/bio')}> design & code. </a>
		I work at
		<a class="links" href={AUTHOR.employerWebsite} target="_blank" rel="external noopener">
			{AUTHOR.employer}
			{AUTHOR.employerSuffix}
		</a>
		as a Software Engineer. I have been coding for {yearsOfCoding} years and a lifelong student of emerging
		technologies.
	</p>

	<p>
		I love crafting fast, accessible, scalable systems that stand the test of time with tools and
		technologies like TypeScript, JavaScript, Go, SQL, Node.js, React, Next.js, SvelteKit, HTML,
		CSS, Tailwind CSS, and
		<a
			href={RESUME_PATH}
			title="View Resume"
			target="_blank"
			rel="external noopener"
			class="links gap-1 flex items-center"
		>
			<span>more</span>
			<LinkIcon classname="stroke-2 stroke-current size-2" />
		</a>
	</p>

	<p>
		When I’m AFK, you’ll find me recharging with my wonderful family, strategizing over a Chess
		board, or locked in a Badminton rally. If I’m not on the move, I’m likely lost in the pages of a
		book or catching up on my favorite Anime.
	</p>
</div>
