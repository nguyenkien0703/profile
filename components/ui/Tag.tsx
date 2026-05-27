import { TechIcon } from "./TechIcon";

type TagProps = {
  children: string;
  variant?: "default" | "accent" | "muted";
  showIcon?: boolean;
};

export function Tag({
  children,
  variant = "default",
  showIcon = true,
}: TagProps) {
  const styles = {
    default:
      "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)]",
    accent:
      "border-[var(--accent-dim)] bg-[var(--accent-glow)] text-[var(--accent)]",
    muted:
      "border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground-muted)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs ${styles[variant]}`}
    >
      {showIcon && <TechIcon tech={children} />}
      {children}
    </span>
  );
}
