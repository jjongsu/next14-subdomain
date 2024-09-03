'use client';

import { goUpIcon } from '@/assets/images';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

/**
 * 사이트 상단으로 이동하는 component
 */
export default function GoUpBtn() {
    /** 사이트 상단으로 이동하는 함수 */
    const handleGoUp: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        window.scroll(0, 0);
    };

    return (
        <button className='w-14 h-14 fixed right-10 bottom-10 rounded-full border flex items-center justify-center' onClick={handleGoUp}>
            <Image src={goUpIcon} alt='go-up-icon' width={40} height={40} priority />
        </button>
    );
}
