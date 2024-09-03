import localFont from 'next/font/local';

export const pretendardFont = localFont({
    preload: true,
    src: [
        {
            path: '../assets/fonts/Pretendard-Bold.woff2',
            style: 'Bold',
        },
        {
            path: '../assets/fonts/Pretendard-Light.woff2',
            style: 'Light',
        },
        {
            path: '../assets/fonts/Pretendard-Medium.woff2',
            style: 'Medium',
        },
        {
            path: '../assets/fonts/Pretendard-Light.woff2',
            style: 'Light',
        },
        {
            path: '../assets/fonts/Pretendard-Regular.woff2',
            style: 'Regular',
        },
        {
            path: '../assets/fonts/Pretendard-SemiBold.woff2',
            style: 'SemiBold',
        },
    ],
    variable: '--font-pretendard',
    display: 'swap',
});

export const blueberryFont = localFont({
    preload: true,
    src: [
        {
            path: '../assets/fonts/BlueberrySans-Medium.woff2',
            style: 'Medium',
        },
        {
            path: '../assets/fonts/BlueberrySans-Regular.woff2',
            style: 'Regular',
        },
    ],
    variable: '--font-blueberry',
    display: 'swap',
});
