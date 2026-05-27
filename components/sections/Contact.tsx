import { SectionHeader } from "../ui/SectionHeader";
import type { Dictionary } from "../../app/[locale]/dictionaries";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CodeforcesIcon, GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  const items = [
    {
      icon: Mail,
      label: dict.contact.email,
      value: "kiennv.contact@gmail.com",
      href: "mailto:kiennv.contact@gmail.com",
    },
    {
      icon: LinkedinIcon,
      label: dict.contact.linkedin,
      value: "linkedin.com/in/kiendevops",
      href: "https://www.linkedin.com/in/kiendevops/",
    },
    {
      icon: GithubIcon,
      label: dict.contact.github,
      value: "github.com/nguyenkien0703",
      href: "https://github.com/nguyenkien0703",
    },
    {
      icon: CodeforcesIcon,
      label: "Codeforces",
      value: "codeforces.com/profile/AdriendNguyen",
      href: "https://codeforces.com/profile/AdriendNguyen",
    },
    {
      icon: MapPin,
      label: dict.contact.location,
      value: dict.contact.locationValue,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          subtitle={dict.contact.subtitle}
          title={dict.contact.title}
          description={dict.contact.description}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {};
            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className="group flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent-dim)] hover:bg-[var(--surface-hover)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--accent-dim)] bg-[var(--accent-glow)] text-[var(--accent)]">
                  <item.icon size={18} />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--foreground-muted)]">
                    {item.label}
                  </span>
                  <span className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)]">
                    {item.value}
                  </span>
                </div>
                {item.href && (
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--foreground-dim)] transition-colors group-hover:text-[var(--accent)]"
                  />
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
