import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { Skills } from "../../components/sections/Skills";
import { Projects } from "../../components/sections/Projects";
import { Experience } from "../../components/sections/Experience";
import { Contact } from "../../components/sections/Contact";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Skills dict={dict} />
        <Projects dict={dict} locale={locale} />
        <Experience dict={dict} locale={locale} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
