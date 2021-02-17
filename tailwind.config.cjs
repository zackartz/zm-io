const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte"
		],
		options: {
			defaultExtractor: (content) => [
				// This is an internal Tailwind function that we're not supposed to be allowed to use
				// So if this stops working, please open an issue at
				// https://github.com/svelte-add/tailwindcss/issues
				// rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		fontFamily: {
			'sans': ['SF Pro Display', "ui-sans-serif", "-apple-system", "Inter"]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
			'cinnabar': {
				'50': '#fef6f5', 
				'100': '#fdedeb', 
				'200': '#fad3cd', 
				'300': '#f6b9af', 
				'400': '#f08473', 
				'500': '#e94f37', 
				'600': '#d24732', 
				'700': '#af3b29', 
				'800': '#8c2f21', 
				'900': '#72271b'
			},'ecru-white': {
				'50': '#fffffe', 
				'100': '#fefefd', 
				'200': '#fdfdfa', 
				'300': '#fbfcf7', 
				'400': '#f9f9f1', 
				'500': '#f6f7eb', 
				'600': '#ddded4', 
				'700': '#b9b9b0', 
				'800': '#94948d', 
				'900': '#797973'
			},'jaffa': {
				'50': '#fef9f5', 
				'100': '#fef2ec', 
				'200': '#fbdfce', 
				'300': '#f9ccb1', 
				'400': '#f5a677', 
				'500': '#f0803c', 
				'600': '#d87336', 
				'700': '#b4602d', 
				'800': '#904d24', 
				'900': '#763f1d'
			},'indigo': {
				'50': '#f7f8fe', 
				'100': '#eff2fc', 
				'200': '#d7def8', 
				'300': '#bfcbf3', 
				'400': '#8ea3eb', 
				'500': '#5e7ce2', 
				'600': '#5570cb', 
				'700': '#475daa', 
				'800': '#384a88', 
				'900': '#2e3d6f'
			},'java': {
				'50': '#f3fcfc', 
				'100': '#e6f8f9', 
				'200': '#c1eef0', 
				'300': '#9be4e6', 
				'400': '#51d0d4', 
				'500': '#06bcc1', 
				'600': '#05a9ae', 
				'700': '#058d91', 
				'800': '#047174', 
				'900': '#035c5f'
			},'big-stone': {
				'50': '#f3f4f5', 
				'100': '#e7e9eb', 
				'200': '#c4c9ce', 
				'300': '#a0a8b0', 
				'400': '#596775', 
				'500': '#12263a', 
				'600': '#102234', 
				'700': '#0e1d2c', 
				'800': '#0b1723', 
				'900': '#09131c'
			}
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
