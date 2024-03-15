/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				text: "#ededed",
				background: "#0e0e0e",
				primary: "#91c587",
				accent: "#aaaaaa",
			},
			cursor: {
				logo: "url(/logo-128.png), auto",
			},
			keyframes: {
				fadein: {
					"0%": { opacity: 0 },
					"100%": { opacity: 100 },
				},
			},
			animation: {
				fadein: "fadein 1.5s forwards",
			},
		},
	},
	plugins: [],
};
