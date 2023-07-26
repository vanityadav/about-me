<script lang="ts">
	export let src: string;
	export let href: string;
	export let label: string;

	import { page } from '$app/stores';
	$: active = $page.url.pathname.split('/')[1] === href;
</script>

<a href={`/${href}`} class="flex flex-col items-center gap-1 group relative">
	<img {src} alt="Contact" class:animate-dockIconAni={active} />
	<div class="h-1 w-1 rounded-full bg-black opacity-0" class:opacity-100={active} />
	<div class="hidden group-hover:flex absolute -top-10 text-center bg-white px-2 border rounded-md">
		{label}
	</div>
</a>
