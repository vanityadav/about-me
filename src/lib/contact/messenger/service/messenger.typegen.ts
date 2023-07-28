// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
	'@@xstate/typegen': true;
	internalEvents: {
		'': { type: '' };
		'done.invoke.invoke-bmkzp': {
			type: 'done.invoke.invoke-bmkzp';
			data: unknown;
			__tip: 'See the XState TS docs to learn how to strongly type this.';
		};
		'error.platform.invoke-bmkzp': { type: 'error.platform.invoke-bmkzp'; data: unknown };
		'xstate.after(1000)#messengerService.ask email': {
			type: 'xstate.after(1000)#messengerService.ask email';
		};
		'xstate.after(1000)#messengerService.ask message': {
			type: 'xstate.after(1000)#messengerService.ask message';
		};
		'xstate.after(1000)#messengerService.ask name': {
			type: 'xstate.after(1000)#messengerService.ask name';
		};
		'xstate.after(1000)#messengerService.ask subject': {
			type: 'xstate.after(1000)#messengerService.ask subject';
		};
		'xstate.after(1000)#messengerService.show email': {
			type: 'xstate.after(1000)#messengerService.show email';
		};
		'xstate.after(1000)#messengerService.show name': {
			type: 'xstate.after(1000)#messengerService.show name';
		};
		'xstate.after(1000)#messengerService.show subject': {
			type: 'xstate.after(1000)#messengerService.show subject';
		};
		'xstate.init': { type: 'xstate.init' };
	};
	invokeSrcNameMap: {
		'send to db': 'done.invoke.invoke-bmkzp';
	};
	missingImplementations: {
		actions: never;
		delays: never;
		guards: never;
		services: never;
	};
	eventsCausingActions: {};
	eventsCausingDelays: {};
	eventsCausingGuards: {
		'email is valid': 'send';
		'if message': 'send';
		'name is valid': 'send';
		'subject is valid': 'send';
	};
	eventsCausingServices: {
		'send to db': '';
	};
	matchesStates:
		| 'ask email'
		| 'ask message'
		| 'ask name'
		| 'ask subject'
		| 'enter email'
		| 'enter message'
		| 'enter name'
		| 'enter subject'
		| 'error'
		| 'sending'
		| 'sent'
		| 'show email'
		| 'show message'
		| 'show name'
		| 'show subject'
		| 'start chatting';
	tags: '1' | '10' | '11' | '13' | '14' | '15' | '2' | '4' | '5' | '7' | '8' | 'editable';
}
