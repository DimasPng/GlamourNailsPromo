/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','node_modules/preline/dist/*.js',],
	theme: {
		extend: {
				backgroundImage: {
						'image-desktop': "url('src/assets/images/mainPage/mainBackground.avif')",
						'image-mobile': "url('src/assets/images/mainPage/mainMin.avif')"
				},
				fontFamily: {
						sans: ["GT Eesti Pro Display", ...defaultTheme.fontFamily.sans],
						'pt-sans': ["PT Sans", ...defaultTheme.fontFamily.sans],
				},
		},
	},
	plugins: [
			require('preline/plugin'),
	],
	darkMode: 'class'
}
