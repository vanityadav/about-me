<script lang="ts">
	import { AUTHOR, PROFILE_IMAGE } from './site';
</script>

<section class="flex items-center gap-4">
	<div class="rounded-full overflow-hidden h-25 w-25">
		<img
			draggable="false"
			src={PROFILE_IMAGE}
			alt="{AUTHOR.name} profile"
			class="h-full w-full scale-130 object-cover object-[3px_35%]"
		/>
	</div>
	<div class="flex flex-col">
		<h1 class="text-xl text-heading">{AUTHOR.name}</h1>
		<p>{AUTHOR.jobTitle}</p>
		<p>{AUTHOR.employer} {AUTHOR.employerSuffix}</p>
		<p class="text-xs text-caption">{AUTHOR.location.full}</p>
	</div>
</section>
