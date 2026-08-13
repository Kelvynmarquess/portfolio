import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function About() {
  return (
    <section className="section shell" id="sobre" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="Sobre mim"
        title="Cuidado em cada interação"
      />
      <div className="about-grid">
        <p className="about-lead">
          {profile.introduction}
        </p>
        <div className="about-detail">
          <p>{profile.about}</p>
          <div className="principle">
            <span aria-hidden="true">01</span>
            <p>Ouvir, acolher e oferecer uma experiência consistente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
