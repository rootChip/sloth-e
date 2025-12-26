import ProtectedNav from "./ProtectedNav";

type ProtectedShellProps = {
  children: React.ReactNode;
};

export default function ProtectedShell({ children }: ProtectedShellProps) {
  return (
    <main className="protected-shell">
      <ProtectedNav />
      {children}
    </main>
  );
}

