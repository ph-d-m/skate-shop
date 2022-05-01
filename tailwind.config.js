module.exports = {
       content: [
              "./pages/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
              extend: {
                     colors: {
                            'black': '#1F1F1F',
                            'white': '#f1f1f1',
                            'orange': '#F87C3D',
                            'purple': '#7C59AD'

                     },
                     spacing: {
                            '40': '38rem',
                     },
                     animation: {
                            marquee: 'marquee 15s linear infinite',
                            marquee2: 'marquee2 15s linear infinite',
                     },
                     keyframes: {
                            marquee: {
                                   '0%': { transform: 'translateX(0%)' },
                                   '100%': { transform: 'translateX(-100%)' },
                            },
                            marquee2: {
                                   '0%': { transform: 'translateX(100%)' },
                                   '100%': { transform: 'translateX(0%)' },
                            },
                     },
                     fontSize: {
                            '6xl': '4rem'

                     },
              },
       },

       plugins: [],
}