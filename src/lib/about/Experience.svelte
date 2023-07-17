<script>
	import ContextBox from '$lib/content/ContextBox.svelte';
</script>

<section id="experience" class="min-h-screen scroll-mt-64">
	<h1 class="sm:hidden sticky top-0 text-2xl font-medium py-4 bg-white/80 backdrop-blur">
		Work Experience
	</h1>
	<div class="flex gap-8 items-start">
		<div class="flex flex-1 items-center gap-2">
			<span class="whitespace-nowrap"> July 2020 </span>
			<div class="h-[1px] w-4 bg-black rounded" />
			<span class="whitespace-nowrap"> Aug 2022 </span>
		</div>
		<div class="flex-[3] flex flex-col gap-4">
			<span> Freelance Artist at Fiverr </span>
			<span>Remote</span>
			<ContextBox width="full" margin="0">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni ratione nulla, atque
				quasi provident adipisci tempora aspernatur quibusdam nemo repellat? Laborum, culpa.
				Sapiente quibusdam autem dicta, non ut officiis magni a laudantium cumque accusantium
			</ContextBox>

			<div>
				<span> Maya </span>
			</div>
			<div class="flex flex-wrap gap-4">
				<a href="https://www.fiverr.com/oneit_?public_mode=true"> Fiverr </a>
				<a href="https://www.artstation.com/vanityadav"> Artstation </a>
				<a href="https://sketchfab.com/oneIT20"> Sketchfab </a>
			</div>
		</div>
	</div>
</section>
