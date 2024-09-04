/**
 * subdomain 사용하고 있는지 확인하는 함수
 * @param {string|null} hostname domain
 * @returns {boolean} true - subdomain 사용, false - subdomain 사용하지 않음
 */
export const checkIsSubDomain = (hostname: string | null): boolean => {
    if (hostname === 'next14-subdomain.vercel.app' || hostname === 'localhost:3000') return false;
    return true;
};

/**
 * subdomain을 사용해야하는지 체크하는 함수
 * @param {string} pathname pathname
 * @returns {boolean} true - subdomain을 사용해야함, false - subdomain을 사용하지 않아야함
 */
export const isChangeSubDomain = (pathname: string): boolean => {
    const pathList = pathname.split('/');
    if (pathList?.[1] === 'company') return true;
    return false;
};
