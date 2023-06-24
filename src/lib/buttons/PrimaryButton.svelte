<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	tabindex="0"
	role="button"
	class="border px-4 py-1 rounded-full cursor-pointer bg-primary text-white"
>
	<slot />
</a>
