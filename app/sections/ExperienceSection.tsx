import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function ExperienceSection() {
  return (
    <section
      className="section section-tinted"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <SectionHeading
          id="experience-title"
          eyebrow="Experiência"
          title="Trajetória em atendimento"
          description="Experiências profissionais apresentadas da mais recente para a mais antiga."
        />
        <div className="timeline">
          {profile.experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.company}>
              <div className="timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="timeline-content">
                <p className="timeline-period">{experience.period}</p>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

