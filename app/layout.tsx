import type { Metadata } from 'next';
import './globals.css';
import { GoUpBtn, Navigator } from '@/components';
import { blueberryFont, pretendardFont } from '../lib/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
    title: 'next14-subdomain',
    description: 'next14-subdomain'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body className={`${pretendardFont.variable} ${blueberryFont.variable}`}>
                <Navigator>{children}</Navigator>
                <GoUpBtn />
            </body>
            <GoogleAnalytics gaId='G-5RXSPRMES2' />
        </html>
    );
}
