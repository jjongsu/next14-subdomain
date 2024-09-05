export default function CompanyLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>layout!!</div>
            {children}
        </div>
    );
}
