/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				gray: "gray-100",
				dark: "#1B1D22",
				lighterdark: "#22262F",
			},
			animation: {
				marquee: "marquee 20s linear infinite",
				marquee2: "marquee2 20s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},

			spacing: {
				128: "32rem",
			},
		},
	},
	plugins: [],
};

//#DB021D red
//yellow #FEBD16
