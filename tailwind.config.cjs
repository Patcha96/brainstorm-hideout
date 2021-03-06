const colors = require('tailwindcss/colors')

const withOpacityValue =
	(varName) =>
	({opacityValue}) =>
		opacityValue === undefined
			? `hsl(var(--${varName}))`
			: `hsla(var(--${varName}) / ${opacityValue})`

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			primary: colors.lime,
			secondary: colors.sky,
			copy: {
				base: withOpacityValue('copy-base-color'),
				muted: withOpacityValue('copy-muted-color'),
			},
			surface: {
				1: withOpacityValue('surface-1-color'),
			},
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Overpass', 'sans-serif'],
		},
		fontWeight: {
			thin: 100,
			normal: 400,
		},
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [],
}
