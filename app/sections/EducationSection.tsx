import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function EducationSection() {
  return (
    <section
      className="section section-tinted"
      id="formacao"
      aria-labelledby="education-title"
    >
      <div className="shell">
        <SectionHeading
          id="education-title"
          eyebrow="Formação"
          title="Aprendizado contínuo"
          description="Formação acadêmica e etapa atual de desenvolvimento profissional."
        />
        <div className="education-list">
          {profile.education.map((education) => (
            <article className="education-card" key={education.course}>
              <div>
                <p className="education-status">{education.status}</p>
                <h3>{education.course}</h3>
                <p>{education.institution}</p>
              </div>
              <p className="education-period">{education.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
