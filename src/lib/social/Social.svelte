<script lang="ts">
	import socials from './socials';
	import SocialButton from './SocialButton.svelte';
	export let type: 'icons' | 'default' = 'default';
</script>

<div class="flex flex-wrap" class:gap-2={type === 'icons'} class:gap-4={type === 'default'}>
	{#each socials as { href, label, icon }}
		<SocialButton {label} {href} {type} {icon} />
	{/each}
</div>
