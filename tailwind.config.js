module.exports = {
    content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#53B3B5',
                    DEFAULT: '#349CA2',
                    dark: '#2C8186',
                },
                secondary: {
                    light: '#9BF4EE',
                    DEFAULT: '#87D9D4',
                    dark: '#70BFBA',
                },
                third: {
                    light: '#FFC63A',
                    DEFAULT: '#F6B20C',
                    dark: '#DB9F0D',
                }
            },
            keyframes: {
                'appear': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(+100px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },


            },
            animation: {
                'appear': 'appear 1s ',

            }
        },
    },

    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/forms'),
    ],

};
