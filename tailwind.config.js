export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                bg: "#0b0f1a",
                card: "#1f2937",
                accent: "#6366f1",
                secondary: "#818cf8",
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out',
                'trans-up': 'transUp 1s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                transUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        },
    },
    plugins: [],
};
