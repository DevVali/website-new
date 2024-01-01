/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				text: "#e9dddd",
				background: "#110e0e",
				primary: "#91c587",
				secondary: "#293c25",
				accent: "#e8e9dd",
			},
			keyframes: {
				fadein: {
					"0%": { opacity: 0 },
					"100%": { opacity: 100 },
				},
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			animation: {
				fadein: "fadein 2s forwards",
				"waving-hand": "wave 2s linear infinite",
			},
			dropShadow: {
				green: ["0 45px 35px rgba(145, 197, 135, 0.5)"],
			},
		},
	},
	plugins: [],
};
