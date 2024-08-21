/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind'

export default {
    content: [
        "./index.html",
        "./src/**/*.{jsx,js,ts,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)"
                ]
            }
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
}