<script lang="ts">
	import socials from './socials';
	import SocialButton from './SocialButton.svelte';
	export let type: 'icons' | 'default' = 'default';
</script>

<div class="flex gap-4 flex-wrap">
	{#each socials as { href, label, icon }}
		<SocialButton {label} {href} {type}>
			{@html icon}
		</SocialButton>
	{/each}
</div>
