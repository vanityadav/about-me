<script lang="ts">
	import { json } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.data);
</script>

<h1>
	<p>Requests</p>
	{@html data.data}
</h1>
