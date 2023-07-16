<script lang="ts">
	export let href: string;
	export let label: string;

	import { page } from '$app/stores';

	$: active = $page.url.href.endsWith(href);
</script>

<a
	{href}
	class={active
		? 'flex items-center gap-2 group text-black transition-all duration-300 font-semibold'
		: 'flex items-center gap-2 group text-gray-400 hover:text-black hover:font-semibold transition-all duration-200 ease-in-expo'}
>
	<div
		class={active
			? 'h-[1px] w-16 rounded-full bg-black duration-300'
			: 'h-[1px] w-8 bg-gray-400 rounded-full group-hover:bg-black group-hover:w-16 duration-200 ease-in-expo'}
	/>
	<span> {label} </span>
</a>
