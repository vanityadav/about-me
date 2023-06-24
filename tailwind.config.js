/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			maxWidth: { siteWidth: '900px' },
			width: {
				desktopWidth: '90%'
			},
			colors: {
				primary: '#f35815'
			}
		}
	},
	plugins: []
};
