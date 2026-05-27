import { SectionHeader } from "../ui/SectionHeader";
import { Tag } from "../ui/Tag";
import { skillGroups } from "../../content/skills";
import type { Dictionary } from "../../app/[locale]/dictionaries";
import {
  Code2,
  Container,
  Cloud,
  Activity,
  Server,
  Layout,
  Database,
  Wrench,
} from "lucide-react";

type Props = { dict: Dictionary };

const groupIcons = {
  languages: Code2,
  devops: Container,
  cloud: Cloud,
  observability: Activity,
  backend: Server,
  frontend: Layout,
  database: Database,
  other: Wrench,
} as const;

export function Skills({ dict }: Props) {
  return (
    <section
      id="skills"
      className="border-b border-[var(--border)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          subtitle={dict.skills.subtitle}
          title={dict.skills.title}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.key];
            return (
              <div
                key={group.key}
                className="flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <Icon size={16} />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    {dict.skills.groups[group.key]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
