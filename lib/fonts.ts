import localFont from 'next/font/local';

export const pretendardFont = localFont({
    preload: true,
    src: [
        {
            path: '../assets/fonts/Pretendard-Bold.woff2',
            style: 'bold',
            weight: '700'
        },
        {
            path: '../assets/fonts/Pretendard-Light.woff2',
            style: 'light',
            weight: '300'
        },
        {
            path: '../assets/fonts/Pretendard-Medium.woff2',
            style: 'medium',
            weight: '500'
        },
        {
            path: '../assets/fonts/Pretendard-Regular.woff2',
            style: 'normal'
        },
        {
            path: '../assets/fonts/Pretendard-SemiBold.woff2',
            style: 'semiBold',
            weight: '600'
        }
    ],
    variable: '--font-pretendard',
    display: 'swap'
});
export const blueberryFont = localFont({
    preload: true,
    src: [
        {
            path: '../assets/fonts/BlueberrySans-Medium.woff2',
            style: 'medium',
            weight: '500'
        },
        {
            path: '../assets/fonts/BlueberrySans-Regular.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-blueberry',
    display: 'swap'
});
