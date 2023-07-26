<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let label: string;

	$: active = $page.url.hash === href;
</script>

<a
	{href}
	class={active
		? 'flex items-center gap-2 group text-black transition-all duration-300 font-semibold'
		: 'flex items-center gap-2 group text-gray-400 hover:text-black hover:font-semibold transition-all duration-200 ease-out-expo'}
>
	<div
		class={active
			? 'h-[1px] w-16 rounded-full bg-black duration-300'
			: 'h-[1px] w-8 bg-gray-400 rounded-full group-hover:bg-black group-hover:w-16 duration-200 ease-out-expo'}
	/>
	<span> {label} </span>
</a>
