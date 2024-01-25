/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				text: "#e9dddd",
				background: "#110e0e",
				primary: "#91c587",
				accent: "#e8e9dd",
			},
			keyframes: {
				fadein: {
					"0%": { top: -100 },
					"40%": { opacity: 0 },
					"100%": { top: 0, opacity: 100 },
				},
			},
			animation: {
				fadein: "fadein 2s forwards",
			},
		},
	},
	plugins: [],
};
