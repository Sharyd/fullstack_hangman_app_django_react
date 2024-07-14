/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')
const toColorValue = require('tailwindcss/src/util/toColorValue')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1820px',
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            '4xl': '2rem',
            '5xl': '2.5rem',
            '6xl': '3rem',
            full: '9999px',
        },
        backgroundImage: {
            'game-desktop-bg': "url('/assets/images/background-desktop.svg')",
            'game-mobile-bg': "url('/assets/images/background-mobile.svg')",
            'game-tablet-bg': "url('/assets/images/background-tablet.svg')",
        },
        extend: {
            dropShadow: {
                'custom-heading-shadow': '6px 6px 0px #243041',
            },
            rounded: {
                'custom-rounded-lg': '1.5rem',
            },

            colors: {
                'custom-white': '#ffffff',
                'custom-dark-navy': '#261676',
                'custom-blue': {
                    DEFAULT: '#2463ff',
                    light: '#60A5FA',
                },
                'custom-light-blue': '#D0D6F9',
                'custom-dark-grey': '#243041',
                gradientStart: '#67B6FF',
                gradientEnd: '#ffffff',
                'custom-error': '#ef4444',
            },
            textShadow: {
                graffiti: `
                  -1px -1px 0 #243041, 
                  1px -1px 0 #243041, 
                  -1px 1px 0 #243041, 
                  1px 1px 0 #243041, 
                  2px 2px 0 #243041,
                  0 5px 0 #000000
                `,
            },

            fontFamily: {
                'mouse-memoirs': ['Mouse Memoirs', 'sans-serif'],
            },

            backgroundImage: {
                'gradient-primary':
                    'linear-gradient(180deg, #FE71FE 0%, #7199FF 100%)',
                'gradient-primary-hover':
                    'linear-gradient(180deg, #FE8FFE 0%, #8FAFFF 100%)',

                'gradient-secondary':
                    'linear-gradient(180deg, #344ABA 0%, #001479 100%)',
            },
            fontSize: {
                xl: '6.5rem',
                l: '5rem',
                m: '3rem',
                s: '1.8rem',
                xs: '1.65rem',
            },
            boxShadow: {
                customInnerOuterBottom:
                    'inset 0rem 0.2rem 0rem 0.1rem #3C74FF, 0rem 0.2rem 0rem 0.1rem #140E66',
                customInnerOuterBottomSecondary:
                    'inset 0rem 0.2rem 0rem 0.1rem #C642FB, 0rem 0.2rem 0rem 0.1rem #140E66',
                customInnerOuterBottomTertiary:
                    'inset 0rem 0.1rem 0rem 0.08rem #3C74FF, 0rem 0.1rem 0rem 0.08rem #140E66',
                customInnerOuterBottomQuaternary:
                    'inset 0rem -0.3rem 0rem 0.2rem #243041, inset 0rem -0.8rem 0rem 0.2rem #9D2DF5',
                customInnerOuterBottomQuinary:
                    'inset 0rem 0.5rem 0rem 0.15rem #3C74FF, 0rem 0.2rem 0rem 0.3rem #140E66',

                customInnerBottom:
                    'inset 0rem -0.3rem 0rem 0.3rem rgba(0, 0, 0, 0.25)',
            },
        },
    },

    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.text-gradient': {
                    backgroundImage: 'linear-gradient(0deg, #67B6FF, #ffffff)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                },
                '.text-stroke': {
                    '-webkit-text-stroke': '2px #243041',
                },
                '.text-shadow-graffiti': {
                    textShadow: `
                  -1px -1px 0 #243041, 
                  1px -1px 0 #243041, 
                  -1px 1px 0 #243041, 
                  1px 1px 0 #243041, 
                  2px 2px 0 #243041,
                  0 5px 0 #000000
                `,
                },
            })
        }),
    ],
}
