module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
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
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],

};
