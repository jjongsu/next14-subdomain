import { NextRequest, NextResponse } from 'next/server';
import { checkIsSubDomain, isChangeSubDomain } from './lib/middlewareHelper';

export const middleware = (req: NextRequest) => {
    const host = req.headers.get('host');
    const searchParams = req.nextUrl.searchParams.toString();

    // 서브 도메인을 사용하여야하는 경우
    if (!checkIsSubDomain(host) && isChangeSubDomain(req.nextUrl.pathname)) {
        const companyName = req.nextUrl.pathname.split('/')[2];
        const hostName = (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') + companyName + `.${host}`;
        const path = `${req.nextUrl.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`.replace(`/${companyName}`, '');

        const newUrl = new URL(path, hostName);
        return NextResponse.redirect(newUrl);
    }

    // 서브 도메인이 있는 경우
    if (checkIsSubDomain(host)) {
        const subdomain = host?.replace(process.env.NODE_ENV === 'development' ? '.localhost:3000' : '.next14-subdomain.vercel.app', '');
        const path = `${req.nextUrl.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`.replace('/company', '');

        const nextURL = new URL(`/company/${subdomain}${path}`, req.nextUrl.origin);
        return NextResponse.rewrite(nextURL);
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
