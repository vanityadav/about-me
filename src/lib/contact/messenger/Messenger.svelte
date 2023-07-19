<script lang="ts">
	import BotMessage from './BotMessage.svelte';
	import UserMessage from './UserMessage.svelte';
	import { messengerService } from './service/messenger';
	console.log($messengerService.context.step);
	let value: string;
	$: if (!$messengerService.hasTag('editable')) value = '';
</script>

<div class="flex flex-col gap-8 bg-hover rounded-3xl overflow-hidden">
	<div class="flex items-center gap-2 sticky top-0 shadow-sm px-5 py-3">
		<img
			src="/favicon.png"
			alt="Vanit"
			height="40px"
			width="40px"
			class="p-1 bg-active rounded-full"
		/>
		<span>Vanit</span>
	</div>
	<div class="flex flex-col gap-6 h-full overflow-y-auto text-xl p-5">
		<span class="text-sm self-center"> Tuesday, July 17, 2023</span>

		{#if $messengerService.context.step >= 1}
			<BotMessage>ask me anything</BotMessage>
		{/if}
		{#if $messengerService.context.step >= 2}
			<BotMessage>Enter Your Name</BotMessage>
		{/if}
		{#if $messengerService.context.step >= 4}
			<UserMessage>{$messengerService.context.name}</UserMessage>
		{/if}
		{#if $messengerService.context.step >= 5}
			<div class="flex flex-col gap-1">
				<BotMessage multi>hi, {$messengerService.context.name}</BotMessage>
				<BotMessage>whats is it about</BotMessage>
			</div>
		{/if}
		{#if $messengerService.context.step >= 7}
			<UserMessage>{$messengerService.context.subject}</UserMessage>
		{/if}
		{#if $messengerService.context.step >= 8}
			<div class="flex flex-col gap-1">
				<BotMessage multi>sure i will help</BotMessage>
				<BotMessage>enter email</BotMessage>
			</div>
		{/if}
		{#if $messengerService.context.step >= 10}
			<UserMessage>{$messengerService.context.email}</UserMessage>
		{/if}
		{#if $messengerService.context.step >= 11}
			<BotMessage>anything else</BotMessage>
		{/if}
		{#if $messengerService.context.step >= 13}
			<UserMessage>{$messengerService.context.message}</UserMessage>
		{/if}
		{#if $messengerService.context.step >= 14}
			<BotMessage>sending</BotMessage>
		{/if}
	</div>
	<div class="flex items-center gap-4 p-5 shadow" on:click={() => messengerService.send('click')}>
		<img
			src="/favicon.png"
			alt="Vanit"
			height="40px"
			width="40px"
			class="p-1 bg-active rounded-full"
		/>
		<div class="w-full relative text-lg">
			<input
				type="text"
				disabled={!$messengerService.hasTag('editable')}
				placeholder={'Your message'}
				bind:value
				class="rounded-full outline-none py-2 px-6 border-[3px] w-full"
			/>
			<img
				src="/favicon.png"
				alt="Vanit"
				height="40px"
				width="40px"
				on:click={() => messengerService.send({ type: 'send', value })}
				class="absolute right-3 top-[7px]"
			/>
		</div>
	</div>
</div>
