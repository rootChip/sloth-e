type PageShellProps = {
    children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
return (
    <main className="page-shell">
    {children}
    </main>
);
}
