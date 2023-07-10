<script lang="ts">
	import type { ActionData } from './$types';
	import Heading from '$lib/content/Heading.svelte';
	import ContextBox from '$lib/content/ContextBox.svelte';
	import ContactForm from '$lib/contact/form/ContactForm.svelte';

	export let form: ActionData;
</script>

<Heading>Get in Touch with ME!</Heading>
<div class="flex gap-8 max-lg:flex-col mt-4">
	<div class="flex-1">
		<ContextBox width="full">
			Unleash the power of your digital dreams! I'm a <b> freelance web developer </b>
			specializing in captivating online experiences. With cutting-edge technology, I bring
			<b> your visions to life </b>
			, pixel by pixel. Let's create a web presence that leaves a lasting impression
		</ContextBox>
		<ContextBox width="full">
			Collaborate with me today and embark on an exciting journey of digital innovation. Together,
			we'll elevate your brand, captivate your audience, and unlock endless possibilities on the
			web. Let's
			<b> make your online presence unforgettable</b>.
		</ContextBox>
		<ContextBox width="full">
			Don't miss out on the opportunity to stand out in the digital realm. Connect with me now and
			let's turn your digital ambitions into a reality that propels your business to success.
		</ContextBox>
		<ContextBox width="full">
			Remember, <b> the future is digital </b>
			, and I'm here to make your online presence shine! Reach out today and let's make magic happen.
		</ContextBox>
	</div>
	<div class="flex-1 p-4 rounded-xl border flex flex-col justify-center">
		<h2 class="text-left text-lg">I'm just a message away!</h2>
		<ContactForm {form} />
	</div>
</div>
