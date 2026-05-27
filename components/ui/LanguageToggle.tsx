"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  current: "en" | "vi";
};

export function LanguageToggle({ current }: Props) {
  const pathname = usePathname();
  const other = current === "en" ? "vi" : "en";

  const otherPath = pathname.replace(/^\/(en|vi)/, `/${other}`);

  return (
    <div className="flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface)] p-0.5 font-mono text-xs">
      <span
        className={`rounded px-2 py-1 ${
          current === "en"
            ? "bg-[var(--accent-glow)] text-[var(--accent)]"
            : "text-[var(--foreground-muted)]"
        }`}
      >
        EN
      </span>
      <Link
        href={otherPath}
        className={`rounded px-2 py-1 transition-colors ${
          current === "vi"
            ? "bg-[var(--accent-glow)] text-[var(--accent)]"
            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
        }`}
      >
        VI
      </Link>
    </div>
  );
}

// Toggle variant rendering both sides as proper buttons
export function LanguageToggleSimple({ current }: Props) {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--surface)] p-0.5 font-mono text-xs">
      {(["en", "vi"] as const).map((l) => {
        const path = pathname.replace(/^\/(en|vi)/, `/${l}`);
        const active = current === l;
        return (
          <Link
            key={l}
            href={path}
            className={`rounded px-2 py-1 transition-colors ${
              active
                ? "bg-[var(--accent-glow)] text-[var(--accent)]"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
