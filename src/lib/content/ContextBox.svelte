<script lang="ts">
	export let width: 'full' | '2/3' = '2/3';
	export let margin: '2' | '0' = '2';
</script>

<p class=" sm:w-2/3 leading-relaxed" class:sm:w-full={width === 'full'} class:py-2={margin === '2'}>
	<slot />
</p>
