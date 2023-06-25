<script lang="ts">
	export let href: string;
	export let onClick: () => void = () => null;
</script>

<a {href} on:click={onClick} class="rounded-md px-4 py-1 hover:bg-gray-50"><slot /></a>
