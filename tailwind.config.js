module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4da6ff',
                    DEFAULT: '#3495A2',
                    dark: '#0066cc',
                },
                secondary: {
                    light: '#f39e58',
                    DEFAULT: '#87D9D4',
                    dark: '#bf5d0d',
                },
                third: {
                    light: '#f39e58',
                    DEFAULT: '#F6B20C',
                    dark: '#bf5d0d',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    
};
