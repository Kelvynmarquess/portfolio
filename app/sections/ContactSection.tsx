import { CopyEmailButton } from "../components/CopyEmailButton";
import { profile } from "../data/profile";

export function ContactSection() {
  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">Contato</p>
          <h2 id="contact-title">Vamos conversar?</h2>
          <p>
            Estou disponível para conversar sobre oportunidades em recepção,
            hospitalidade e atendimento ao cliente.
          </p>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span>E-mail profissional</span>
            <strong>{profile.email}</strong>
          </a>
          <CopyEmailButton email={profile.email} />
        </div>
      </div>
    </section>
  );
}
