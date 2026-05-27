import { Download, Mail, MapPin } from "lucide-react";
import { CodeforcesIcon, GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import type { Dictionary } from "../../app/[locale]/dictionaries";

type Props = { dict: Dictionary };

export function Hero({ dict }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {/* Floating accent blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl" />
        <div
          className="animate-float-slow absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-blue-400 opacity-[0.08] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            <span>{dict.hero.greeting}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {dict.hero.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-[var(--accent)]">
            <span className="rounded-md border border-[var(--accent-dim)] bg-[var(--accent-glow)] px-2 py-1">
              {dict.hero.role}
            </span>
            <span className="flex items-center gap-1.5 text-[var(--foreground-muted)]">
              <MapPin size={12} />
              Hanoi, Vietnam
            </span>
          </div>

          <p className="max-w-2xl text-xl text-[var(--foreground)] sm:text-2xl">
            {dict.hero.tagline}
          </p>

          <p className="max-w-2xl text-base text-[var(--foreground-muted)]">
            {dict.hero.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-dim)]"
            >
              <Mail size={16} />
              {dict.hero.ctaContact}
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent-dim)] hover:text-[var(--accent)]"
            >
              <Download size={16} />
              {dict.hero.ctaCV}
            </a>
            <div className="ml-2 flex items-center gap-1">
              <a
                href="https://github.com/nguyenkien0703"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kiendevops/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://codeforces.com/profile/AdriendNguyen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
                className="rounded-md p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
              >
                <CodeforcesIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
