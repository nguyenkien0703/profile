import Link from "next/link";
import { LanguageToggleSimple } from "./ui/LanguageToggle";
import type { Dictionary, Locale } from "../app/[locale]/dictionaries";
import { Download } from "lucide-react";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Navbar({ locale, dict }: Props) {
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#skills", label: dict.nav.skills },
    { href: "#projects", label: dict.nav.projects },
    { href: "#experience", label: dict.nav.experience },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-semibold tracking-tight text-[var(--accent)]"
        >
          ~/kien
          <span className="ml-0.5 animate-pulse text-[var(--foreground)]">
            _
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="hidden items-center gap-1.5 rounded-md border border-[var(--accent-dim)] bg-[var(--accent-glow)] px-3 py-1.5 font-mono text-xs text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--background)] sm:inline-flex"
          >
            <Download size={12} />
            CV
          </a>
          <LanguageToggleSimple current={locale} />
        </div>
      </nav>
    </header>
  );
}
