import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { profile } from "./data/profile";
import { About } from "./sections/About";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { FocusSection } from "./sections/FocusSection";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <ExperienceSection />
        <FocusSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Portfólio construído com React, TypeScript e Tailwind CSS.</p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
