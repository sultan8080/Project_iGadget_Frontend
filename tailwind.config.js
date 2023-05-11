module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4da6ff',
                    DEFAULT: '#0B84FF',
                    dark: '#0066cc',
                },
                secondary: {
                    light: '#f39e58',
                    DEFAULT: '#ed7410',
                    dark: '#bf5d0d',
                },
                theme: {
                    primary: '#3495A2', // blue
                    secondary: '#87D9D4', // light blue
                    third: '#F6B20C' // orange
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        // require('@tailwindcss/dropdown'),
    ],
    
};
