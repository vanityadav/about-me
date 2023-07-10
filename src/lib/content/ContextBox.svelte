<script lang="ts">
	export let width: 'full' | '2/3' = '2/3';
</script>

<p class="py-2 sm:w-2/3 leading-relaxed" class:sm:w-full={width === 'full'}>
	<slot />
</p>
