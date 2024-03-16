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
		},
	},
	plugins: [],
};
