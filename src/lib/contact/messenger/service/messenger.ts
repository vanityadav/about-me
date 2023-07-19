import { createMachine, interpret } from 'xstate';
const machine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QFs6zAOxgJwMpmwDcBLAYzADpYAXAQ22oAJSALW664rAYlIBsyAawDaABgC6iUAAcA9rGKdZGKSAAeiAJwBmACwVtADgBMAdmO7togGwBWa6YA0IAJ6JtARg8VNok6c0Pa1EbAF9Q51RYdCwCfCIySlpYQUYMWlRuNRp2JIAzagIACg8Q0QBKbiiYnHiScgpk1PTUMUkkEDkFJRUOjQQPM28PXUDTU2ttbQnDZzcET20KXVFbXRMvQ0DNTXDItExagnqklLSMsCycwsaC4tKQyurDuOPExrOWsGEPdpl5RTEZSqfqlFY+Ua2B7WUY2OaIYwmCi2Ey6DymQaI3TGYzaPYgZ6xPBvBqYQrYc6ZGIQNqqLqA4F9RAeNaGCiGWxWPSaezmSzwhZeHx+MyBYJhCIEg5EurvWAsWQAd0pl2ydButDu2BKZSe0qOCQa8qVKtpHXpPRBzM0SOMO1xRmshj8KIFi2Wq3Wxk2212ksJBpOVAVyq+V3V+XJOseVX1r0NlGNoYuPz+nQBlqZA1MtmMFFEOxhtgLOgC1gFiLzKIs6MxhmxuPxAfjQaajFgAFcAEYAKzApGo4dytyjDwqseiL2JCY+qU7vf71DN-26QN6oH6uPWwtzDw5W05bo8SxWrO9Hi2Hh2Tbj09bZ3nfYHQ41Wuj4+bd-ebcfi9TdIzNcrQQc82VMT1dACex63LVwESRas0QxHF6xxPF-VvWVSQwcl227J9B2pZd01XRkNwRGFRGWOxdGCFljGsIsj28Xx-DFEJrBvScZRJRMQzwhdnzVYdNVHXUJxqFs5X438B2Ii0gKzKwOXzUQRlsDEVimbRbCPE9PQ2C9fS4ySvyNGT8MXF9I3ucTPywviTVkpdfgA0j13UeC1nZNTdzsAs0Vg+ZK2RVFaxQht0P2bjA2-M4wGQWhiD4ayR1smN7N42dGASpK+HkwCyM8hZdChChglMSwphREZET0j0zx9K8-Wi0yHOy3LktS0T0o-TCsrbTr8tc81Co8-ptBxbwVlMetSq2Sw7ArBCwuQrE0JMqd2rJAgcsSrqiIkNyGXG9xzFMHxDEq9YbHWXRdGY4U2KCDjNp4mckz2vLurfMc9RiqTzJNIaCvc4DAqooxj00axNAmJ1ZjgwV9Maozmre2KgeVIafrEjL+o+-iQZGlcTuA7QdCoi8RmsEYrrtJakZCxDwvWxsMIBszTlSapaBgXHev+tqBrOXmYFBsms1KhjLtMaZPE0e64fq08nQvG6vFMDHAe5xgxdVa4bO1P6JK2kWebQPnvhJkjJfIhBsRhihZvGObjA0wJlqrVa60i7WuYoHaKX17hDrTBSiv6UZvQoFlJose6rsPJHtFh5Ziw5b1zFxVZ-faz6Q4lzN7eji6YJzRWWRsILEEMab9wCNFLF8jw86y6kuCgbgIGUSguEIWRBD7jAB6HgBaLtkEEAAvaQi8U+2dP0JfadEYxREsEw1grCx2RzIIdNmnSL1sNuPswCBO+4AhsFkbAKGkPh2DyO-kAofvB7ACep9n+fI-cbyK9Sjr03u7B6Kd17lU5FDCwGlbA8iilKTm21sC32wNwPmSUMB-1OggBwVNGLekhM6HkukU5XljvYdEJhDBOkLGfIMMRByYK4Dg4C+DY6EJGDyEhtgyHBVxAYcYwQdgogCFsdCkoMCyAgHAVQmUEzHWLsVMeNcEBj1sD4HYAQdhGDtOYKEDC5R0AYMwNgHBO5KIXsVWa3g5ZWBCBiGEehwHzGqvmTksN3aGEmusDkRiGhti+FY-+AwArLHWL4E+Ok7TGDdDpDxqdNDeN8YYfxHNhYziDiqEJuCRiDGRHwim6IcS5hMPEzRqwkkpIsGk0+GSzaExNME0aYMszohtOyUYHIRQ2gcB4CpiSvEolSek1qjT7xzksgOXJwFvR2AoGYRivg7Cp3sNoQZVThk+NqWMpBmSgzZOcrMrMFhfAGC8NiJCtEimbM8ckkZuz6njPeowiyglqAnPtoiRW5VYnryMKIeGaj3FbIeTsvxzz9kTLiqkIaXziqTRzMiWGmxESr00Hc6pjzIUBMoNk+FrS7aIvgUsNSehKp+DsMEEFCSwU1NxQ0150lgb7T4AiiacMLrwO2IMIINpXHuDpfchldS8XZX1hyxAVULp+PhtTJWWLtmjKhQow5OFdqSqJcoqOExNE8hxL5NYOYNkp2FdiiFYqmWY0csqLVpMdWIGLIxZElVSjcnXnDfhCJOQGBcTDSCBZ47io7lgKVDs4lMyduvNeMNpgOloeKm+d9w18Koj4rYcsGIdPKSnbEBhfJjD3HstVcoySpuLOyIwcNJq03EZG4KtFkS4ivA4bEUxRCp3COEIAA */
		id: 'messengerService',
		context: {
			name: '',
			email: '',
			message: '',
			subject: '',
			step: 1
		},
		initial: 'start chatting',
		states: {
			'start chatting': {
				tags: '1',
				on: {
					click: {
						target: 'ask name',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'ask name': {
				after: {
					'1000': [
						{
							target: '#messengerService.enter name',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '2'
			},
			'enter name': {
				tags: 'editable',
				on: {
					send: {
						target: 'show name',
						cond: 'name is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show name': {
				after: {
					'1000': [
						{
							target: '#messengerService.ask subject',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '4'
			},
			'ask subject': {
				after: {
					'1000': [
						{
							target: '#messengerService.enter subject',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '5'
			},
			'enter subject': {
				tags: 'editable',
				on: {
					send: {
						target: 'show subject',
						cond: 'subject is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show subject': {
				after: {
					'1000': [
						{
							target: '#messengerService.ask email',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '7'
			},
			'ask email': {
				after: {
					'1000': [
						{
							target: '#messengerService.enter email',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '8'
			},
			'enter email': {
				tags: 'editable',
				on: {
					send: {
						target: 'show email',
						cond: 'email is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show email': {
				after: {
					'1000': [
						{
							target: '#messengerService.ask message',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '10'
			},
			'ask message': {
				after: {
					'1000': [
						{
							target: '#messengerService.enter message',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '11'
			},
			'enter message': {
				tags: 'editable',
				on: {
					send: {
						target: 'show message',
						cond: 'if message',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show message': {
				tags: '13',
				always: {
					target: 'sending',
					actions: {
						params: {},
						type: 'change step'
					}
				}
			},
			sending: {
				invoke: {
					src: 'send to db',
					id: 'invoke-bmkzp',
					onError: [
						{
							target: 'error',
							actions: {
								params: {},
								type: 'change step'
							}
						}
					],
					onDone: [
						{
							target: 'sent',
							actions: {
								params: {},
								type: 'change step'
							}
						}
					]
				},
				tags: '14'
			},
			error: {
				tags: '15',
				on: {
					again: {
						target: 'start chatting',
						actions: {
							params: {},
							type: 'reset steps'
						}
					}
				}
			},
			sent: {
				tags: '15',
				on: {
					again: {
						target: 'start chatting',
						actions: {
							params: {},
							type: 'reset steps'
						}
					}
				}
			}
		},
		schema: {
			context: {} as {
				name: string;
				email: string;
				message: string;
				subject: string;
				step: number;
			},
			events: {} as { type: 'click' } | { type: 'send' } | { type: 'again' }
		},
		predictableActionArguments: true,
		preserveActionOrder: true,
		tsTypes: {} as import('./messenger.typegen').Typegen0
	},
	{
		actions: {
			'change step': (context, event) => {
				console.log('Called', context.step);
				context.step += 1;
			},
			'reset steps': (context, event) => {
				context.step = 1;
			}
		},
		services: { 'send to db': (context, event) => {} },
		guards: {
			'subject is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.subject = event?.value;
					return true;
				} else return false;
			},
			'name is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.name = event?.value;
					return true;
				} else return false;
			},
			'email is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.email = event?.value;
					return true;
				} else return false;
			},
			'if message': (context, event) => {
				if (event?.value?.length > 3) {
					context.message = event?.value;
					return true;
				} else return false;
			}
		},
		delays: {}
	}
);

export const messengerService = interpret(machine).start();
