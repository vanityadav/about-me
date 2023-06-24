<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	tabindex="0"
	role="button"
	class="border px-4 py-1 rounded-md cursor-pointer bg-black/80 text-white"
>
	<slot />
</a>
