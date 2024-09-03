import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { GoUpBtn, Navigator } from '@/components';
import { blueberryFont, pretendardFont } from '../lib/fonts';

export const metadata: Metadata = {
    title: 'next14-subdomain',
    description: 'next14-subdomain',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body className={`${pretendardFont.variable} ${blueberryFont.variable}`}>
                <Navigator>{children}</Navigator>
                <GoUpBtn />
            </body>
        </html>
    );
}
