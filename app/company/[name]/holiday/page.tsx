'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getHoliday(name: string, year: number) {
    const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${name}`);
    return res.json();
}

type THolidayData = {
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    fixed: boolean;
    global: boolean;
    counties: boolean | null;
    launchYear: number | null;
    types: string[];
}[];

export default function Holiday({ params: { name } }: ICompanyParams) {
    const searchParams = useSearchParams();
    const [year, setYear] = useState(Number(searchParams.get('year') ?? 2024));
    const [holidayData, setHolidayData] = useState<THolidayData | null>(null);

    useEffect(() => {
        getHoliday('KR', year).then((data: THolidayData) => {
            setHolidayData(data);
        });
        return () => {
            setHolidayData(null);
        };
    }, [year, name]);

    return (
        <>
            <div>Holiday - page</div>
            <input
                type='number'
                value={year}
                className='border'
                onChange={(e) => setYear(e.target.valueAsNumber)}
            ></input>
            {holidayData === null && <div>...loading!!</div>}
            {holidayData !== null &&
                holidayData?.map((el, i) => {
                    return (
                        <div key={i}>
                            <div>{el.date}</div>
                            <div>{el.localName}</div>
                        </div>
                    );
                })}
        </>
    );
}
