<script lang="ts">
	import dockRoutes from './routes';
	import DockIcon from './DockIcon.svelte';
</script>

<nav class="flex items-center justify-between">
	{#each dockRoutes as { src, href, label }}
		<DockIcon {src} {href} {label} />
	{/each}
</nav>
