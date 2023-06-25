/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: { siteWidth: '900px' },
			width: {
				desktopWidth: '90%'
			},
			colors: {
				primary: '#f35815'
			},
			boxShadow: {
				shadowTopLg: '0 -.5em 1em  rgba(0,0,0,0.1)',
				shadowTopMd: '0 -6px 12px  rgba(0,0,0,0.1)',
				shadowTopSm: '0 -4px 8px  rgba(0,0,0,0.05)',
				mobileMenu: '0 0 1em .5em  rgba(0,0,0,0.15)'
			}
		}
	},
	plugins: []
};
