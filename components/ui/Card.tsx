type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] ${className}`}
    >
      {children}
    </div>
  );
}
