import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "./dictionaries";

export const metadata: Metadata = {
  title: "Nguyen Van Kien — DevOps Engineer",
  description:
    "DevOps Engineer with 3+ years of experience building CI/CD, cloud infrastructure, and automation on AWS, Kubernetes, Docker. Based in Hanoi, Vietnam.",
  keywords: [
    "DevOps Engineer",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Infrastructure as Code",
    "Hanoi",
    "Vietnam",
    "Nguyen Van Kien",
  ],
  authors: [{ name: "Nguyen Van Kien" }],
  openGraph: {
    title: "Nguyen Van Kien — DevOps Engineer",
    description:
      "Building, deploying, and scaling reliable systems. CI/CD · Kubernetes · AWS · Observability.",
    type: "website",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return <>{children}</>;
}
