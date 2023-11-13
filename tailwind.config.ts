import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-dBlue": "linear-gradient(118deg, rgba(10,31,53,1) 0%, rgba(4,13,23,1) 100%)",
				"gradient-wBlue": "linear-gradient(118deg, #346296 0%, #081729 100%)",
				"gradient-buttonL": "linear-gradient(97deg, #144558 -3.49%, #0E3B4C 118.41%)"
			},
			colors: {
				"accentGreen": "#04B939",
				"accentBlue": "#1C89EF",
				"accentGrey": "#ffffff33",
			},
			screens: {
				"mobile": "375px",
				"tablet": "768px",
				"desktop": "1024px",
				"desktopL": "1440px"
			},
			fontFamily: {
				"inter": ["Inter", ...defaultTheme.fontFamily.sans],
				"outfit": ["Outfit", "Inter", ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
};
export default config;
