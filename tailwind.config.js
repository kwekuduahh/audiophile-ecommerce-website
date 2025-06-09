/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			darkOrange: 'hsl(var(--dark-orange))',
			fadedOrange: 'hsl(var(--faded-orange))',
			oilBlack: 'hsl(var(--oil-black))',
			pureBlack: 'hsl(var(--pure-black))',
			darkWhite: 'hsl(var(--dark-white))',
			whiteWash: 'hsl(var(--white-wash))',
			pureWhite: 'hsl(var(--pure-white))',
		},
	},
	plugins: [],
};
