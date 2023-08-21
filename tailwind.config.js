/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: { siteWidth: '576px' },
			width: {
				siteWidth: '90%'
			},
			animation: {
				dockIconAni: 'dockIconAni 0.4s ease forwards'
			},
			keyframes: {
				dockIconAni: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				}
			},
			colors: {
				// primary: '#f35815',
				hover: '#f7f7f9',
				active: '#e9e9eb',
				primary: '#3898ec',
				secondary: '#0078ff'
			},
			boxShadow: {
				shadowTopLg: '0 -.5em 1em  rgba(0,0,0,0.1)',
				shadowTopMd: '0 -6px 12px  rgba(0,0,0,0.1)',
				shadowTopSm: '0 -4px 8px  rgba(0,0,0,0.05)',
				mobileMenu: '0 0 1em .1em  rgba(0,0,0,0.1)'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},
	plugins: []
};
