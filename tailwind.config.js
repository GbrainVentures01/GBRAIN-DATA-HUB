/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
module.exports = {
    corePlugins: {
        preflight: false
    },
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors
        },
        important: '#root',
        extend: {}
    },
    plugins: []
};
