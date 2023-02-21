/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxs: "300px",
		    // => @media (min-width: 300px) { ... }

			xs: "390px",
		    // => @media (min-width: 390px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				popp: ['Poppins', 'sans-serif'],
			},
			width: {
				'128': '32rem',
			  },
			height: {
				'128': '32rem',
			  },
			  backgroundImage: {
				'wsps': "url('./assets/bg-wsps.svg')",
				'mind' : "url('./assets/bg-mind.svg')",
				'background': "url('./assets/bg.png')",
				'settlyt': "url('./assets/settlyt.svg')",
				'alpha':"url('./assets/bgalpha.png')",
				'thatsgame':"url('./assets/thatsgame.svg')",
				'background1':"url('./assets/background1.svg')",
				'ideal':"url('./assets/ideal.png')",
				'maxsold':"url('./assets/maxsold.png')",
				'dyna':'url("./assets/dyna.svg")',
				'tommorow':'url("./assets/tommorow.svg")',
				'contact':'url("./assets/contact.svg")',
			  }
			
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
	  ]
};
