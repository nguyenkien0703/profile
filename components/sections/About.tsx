import { SectionHeader } from "../ui/SectionHeader";
import type { Dictionary } from "../../app/[locale]/dictionaries";
import { Briefcase, Layers, Rocket } from "lucide-react";

type Props = { dict: Dictionary };

export function About({ dict }: Props) {
  const stats = [
    { icon: Briefcase, value: "3+", label: dict.about.highlights.years },
    { icon: Rocket, value: "7+", label: dict.about.highlights.projects },
    { icon: Layers, value: "20+", label: dict.about.highlights.stack },
  ];

  return (
    <section
      id="about"
      className="border-b border-[var(--border)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader subtitle={dict.about.subtitle} title={dict.about.title} />

        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <p className="text-base leading-relaxed text-[var(--foreground)]">
              {dict.about.paragraph1}
            </p>
            <p className="text-base leading-relaxed text-[var(--foreground-muted)]">
              {dict.about.paragraph2}
            </p>
            <p className="text-base leading-relaxed text-[var(--foreground-muted)]">
              {dict.about.paragraph3}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--accent-dim)] bg-[var(--accent-glow)] text-[var(--accent)]">
                  <s.icon size={18} />
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[var(--foreground)]">
                    {s.value}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
