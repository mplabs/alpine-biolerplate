const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            white: '#ffffff',
            black: '#000000',
            body: '#64748B',
            background: '#F1F5F9',
            primary: '#3C50E0',
            secondary: '#80CAEE',
            success: '#219653',
            danger: '#D34053',
            warning: '#FFA70B',
        },
        screens: {
            ...defaultTheme.screens,
        },
        extend: {
            backgroundImage: {
                video: "url('../images/video/video.png')",
            },
        },
    },
    plugins: [],
}
