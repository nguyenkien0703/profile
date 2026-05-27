import { SectionHeader } from "../ui/SectionHeader";
import { experiences, awards } from "../../content/experience";
import type { Dictionary, Locale } from "../../app/[locale]/dictionaries";
import Image from "next/image";
import { Award, Building2, ExternalLink } from "lucide-react";

type Props = { dict: Dictionary; locale: Locale };

export function Experience({ dict, locale }: Props) {
  return (
    <section
      id="experience"
      className="border-b border-[var(--border)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          subtitle={dict.experience.subtitle}
          title={dict.experience.title}
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Work experience timeline */}
          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-[var(--accent)]">
              {dict.experience.title}
            </h3>
            <div className="relative space-y-6 border-l-2 border-[var(--border)] pl-6">
              {experiences.map((e, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 ${
                      e.current
                        ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]"
                        : "border-[var(--border-strong)] bg-[var(--background)]"
                    }`}
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)]">
                      <span>{e.period[locale]}</span>
                      {e.current && (
                        <span className="rounded border border-[var(--accent-dim)] bg-[var(--accent-glow)] px-1.5 py-0.5 text-[var(--accent)]">
                          {dict.experience.present}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-base font-semibold text-[var(--foreground)]">
                      <Building2 size={14} className="text-[var(--accent)]" />
                      {e.company}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {e.role[locale]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-[var(--accent)]">
              {dict.experience.awardsTitle}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {awards.map((a, i) => {
                const Wrapper = a.image ? "a" : "div";
                const wrapperProps = a.image
                  ? {
                      href: a.image,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                  <Wrapper
                    key={i}
                    {...wrapperProps}
                    className="group flex flex-col gap-3 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--accent-dim)]"
                  >
                    {a.image && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--background-elevated)]">
                        <Image
                          src={a.image}
                          alt={a.title.en}
                          fill
                          unoptimized
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                        <div className="absolute right-2 top-2 rounded-md bg-[var(--background)]/80 p-1.5 text-[var(--accent)] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                          <ExternalLink size={12} />
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3 p-4 pt-2">
                      {!a.image && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--accent-dim)] bg-[var(--accent-glow)] text-[var(--accent)]">
                          <Award size={14} />
                        </div>
                      )}
                      <div className="flex min-w-0 flex-col gap-1">
                        <div className="font-mono text-xs text-[var(--foreground-muted)]">
                          {a.date}
                        </div>
                        <div className="text-sm font-medium leading-snug text-[var(--foreground)] group-hover:text-[var(--accent)]">
                          {a.title[locale]}
                        </div>
                        {a.detail && (
                          <div className="text-xs text-[var(--foreground-muted)]">
                            {a.detail[locale]}
                          </div>
                        )}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
