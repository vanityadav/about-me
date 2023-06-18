<script>
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import Link from '../link/Link.svelte';
</script>

<header class="flex items-center justify-between gap-8 py-2">
	<Link href="/">Vanit.</Link>
	<nav class="flex gap-8">
		<Link href="/about">About</Link>
		<Link href="/skills">Skills</Link>
		<Link href="/blogs">Blogs</Link>
		<Link href="/work">Work</Link>
	</nav>
	<PrimaryButton>Contact</PrimaryButton>
</header>
