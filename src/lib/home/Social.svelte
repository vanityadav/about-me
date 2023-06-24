<script lang="ts">
	import socials from './socials';
	import SocialButton from './SocialButton.svelte';
</script>

<div class="py-10 flex gap-4 flex-wrap">
	{#each socials as { href, label, icon }}
		<SocialButton {label} {href}>
			{@html icon}
		</SocialButton>
	{/each}
</div>
