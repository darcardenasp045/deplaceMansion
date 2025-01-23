/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Favorit: ['Favorit', 'sans-serif'],
				Cyberthron: ['Cyberthron', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
