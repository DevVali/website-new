/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				text: "#e9dddd",
				background: "#110e0e",
				primary: "#91c587",
			},
		},
	},
	plugins: [],
};
