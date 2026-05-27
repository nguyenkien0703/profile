import { SectionHeader } from "../ui/SectionHeader";
import { Tag } from "../ui/Tag";
import { projects } from "../../content/projects";
import type { Dictionary, Locale } from "../../app/[locale]/dictionaries";
import { ExternalLink, Users, Briefcase } from "lucide-react";

type Props = { dict: Dictionary; locale: Locale };

export function Projects({ dict, locale }: Props) {
  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          subtitle={dict.projects.subtitle}
          title={dict.projects.title}
          description={dict.projects.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent-dim)]"
            >
              <div className="absolute right-0 top-0 h-12 w-12 rounded-bl-xl rounded-tr-xl bg-gradient-to-bl from-[var(--accent-glow)] to-transparent opacity-50" />

              <header className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[var(--foreground-muted)]">
                    <span className="flex items-center gap-1">
                      <Briefcase size={11} />
                      {p.role[locale]}
                    </span>
                    {p.team && (
                      <span className="flex items-center gap-1">
                        <Users size={11} />
                        {dict.projects.team} {p.team}
                      </span>
                    )}
                    {p.period && (
                      <span className="text-[var(--foreground-dim)]">
                        {p.period}
                      </span>
                    )}
                  </div>
                </div>
              </header>

              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                {p.description[locale]}
              </p>

              <ul className="flex flex-col gap-1.5">
                {p.highlights[locale].slice(0, 3).map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-[var(--foreground-muted)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 8).map((t) => (
                    <Tag key={t} variant="muted">
                      {t}
                    </Tag>
                  ))}
                  {p.tech.length > 8 && (
                    <Tag variant="muted" showIcon={false}>
                      {`+${p.tech.length - 8}`}
                    </Tag>
                  )}
                </div>

                {p.links && p.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors ${
                          l.status === "dead"
                            ? "text-[var(--foreground-dim)] line-through hover:text-[var(--foreground-muted)]"
                            : "text-[var(--accent)] hover:text-[var(--foreground)]"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            l.status === "live"
                              ? "bg-[var(--accent)]"
                              : l.status === "dead"
                                ? "bg-[var(--danger)]"
                                : "bg-[var(--warning)]"
                          }`}
                        />
                        {l.label}
                        <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
