import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['var(--font-pretendard)'],
                blueberry: ['var(--font-blueberry)'],
            },
            colors: {
                aside: { bg: '#F2F2F2' },
            },
        },
    },
    plugins: [],
};
export default config;
