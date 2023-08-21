/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				heading: 'rgb(var(--heading))',
				content: 'rgb(var(--content))',
				caption: 'rgb(var(--caption))',
				wash1: 'rgb(var(--wash1))',
				wash2: 'rgb(var(--wash2))',
				border: 'rgb(var(--primary-border))'
			}
		}
	},
	plugins: []
};
