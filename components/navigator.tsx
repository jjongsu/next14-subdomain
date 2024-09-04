import { hansolVHOMLogo } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * 사이트 메뉴를 설정하도록 구성하는 wrapper component
 */
export default function Navigator({ children }: { children: ReactNode }) {
    const menu: { title: string; url: string }[] = [
        { title: '견적 수정', url: '/company/paper' },
        { title: '견적 관리', url: '/company/material' }
    ];

    return (
        <div className='relative'>
            <nav className='sticky top-0 flex h-[86px] w-full items-center gap-4 border bg-white p-3 text-[18px]'>
                <Link
                    className='flex-1 font-pretendard font-bold'
                    href={'/abc'}
                    as={'http://localhost:3000'}
                >
                    <Image
                        src={hansolVHOMLogo}
                        alt='logo'
                        priority
                    />
                </Link>
                <Link
                    className='flex-0 font-blueberry'
                    href={'/company/mypage'}
                >
                    마이페이지
                </Link>
                <Link
                    className='flex-0 font-blueberry'
                    href={'/company/hansol/paper'}
                >
                    로그인
                </Link>
                <Link
                    className='flex-0 font-blueberry'
                    href={'/'}
                    as={process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://next14-subdomain.vercel.app'}
                >
                    로그아웃
                </Link>
            </nav>
            <section className='flex h-full w-full'>
                <aside className='flex-0 sticky left-0 top-[86px] flex h-fit flex-col bg-red-400'>
                    {menu.map(({ title, url }) => {
                        return (
                            <Link
                                key={title}
                                href={url}
                                className='font-pretendard text-base font-light'
                            >
                                {title}-page
                            </Link>
                        );
                    })}
                </aside>
                <div className='flex-1 overflow-auto'>{children}</div>
            </section>
        </div>
    );
}
