/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./App.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'slow-zoom': 'slowZoom 20s linear infinite alternate',
                'blob': 'blob 7s infinite alternate',
                'slide-up': 'slideUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'fade-in': 'fadeIn 1.5s ease-out forwards',
                'expand-width': 'expandWidth 1s ease-out forwards',
            },
            keyframes: {
                slowZoom: {
                    'from': { transform: 'scale(1)' },
                    'to': { transform: 'scale(1.1)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                slideUp: {
                    'from': { transform: 'translateY(100%)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeInUp: {
                    'from': { transform: 'translateY(40px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                expandWidth: {
                    'from': { transform: 'scaleX(0)' },
                    'to': { transform: 'scaleX(1)' },
                },
            },
        },
    },
    plugins: [],
}
