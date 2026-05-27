type Props = {
  subtitle: string;
  title: string;
  description?: string;
};

export function SectionHeader({ subtitle, title, description }: Props) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="label-mono">{subtitle}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-[var(--foreground-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
