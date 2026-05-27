import type { Dictionary } from "../app/[locale]/dictionaries";

type Props = { dict: Dictionary };

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 font-mono text-xs text-[var(--foreground-dim)] sm:px-6">
        <span>{dict.footer.copyright}</span>
      </div>
    </footer>
  );
}
