module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: '3495A2',
                secondary: '87D9D4',
                third: 'F6B20C'
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
