import type { Dictionary } from "../app/[locale]/dictionaries";

type Props = { dict: Dictionary };

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 font-mono text-xs text-[var(--foreground-dim)] sm:flex-row sm:px-6">
        <span>{dict.footer.copyright}</span>
        <span>{dict.footer.built}</span>
      </div>
    </footer>
  );
}
