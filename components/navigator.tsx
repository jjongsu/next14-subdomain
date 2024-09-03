import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * 사이트 메뉴를 설정하도록 구성하는 wrapper component
 */
export default function Navigator({ children }: { children: ReactNode }) {
    return (
        <div className='w-screen h-screen'>
            <nav className='w-full flex items-center'>
                <Link className='font-pretendard font-bold' href={'/'}>
                    홈페이지
                </Link>
                <Link className='font-blueberry font-light' href={'/abc'}>
                    마이페이지
                </Link>
                <Link className='font-blueberry' href={'/'}>
                    로그아웃
                </Link>
            </nav>
            {children}
        </div>
    );
}
