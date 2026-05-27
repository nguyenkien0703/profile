import { getIcon } from "../../lib/tech-icons";

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

  const icon = showIcon ? getIcon(children) : null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs ${styles[variant]}`}
    >
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon.url}
          alt=""
          width={12}
          height={12}
          loading="lazy"
          aria-hidden="true"
          className={
            icon.needsTint
              ? "h-3 w-3 brightness-0 saturate-100 [filter:invert(82%)_sepia(45%)_saturate(556%)_hue-rotate(74deg)_brightness(95%)_contrast(90%)]"
              : "h-3 w-3 opacity-90"
          }
        />
      )}
      {children}
    </span>
  );
}
