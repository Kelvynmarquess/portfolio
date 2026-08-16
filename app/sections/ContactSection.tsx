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
            Estou disponível para conversar sobre oportunidades em atendimento
            presencial ou remoto e funções que valorizem comunicação,
            adaptação e tecnologia.
          </p>
        </div>
        <div className="contact-actions">
          <a
            aria-label={`Ligar para ${profile.phone.display}`}
            className="contact-link"
            href={`tel:${profile.phone.href}`}
          >
            <span>Telefone profissional</span>
            <strong>{profile.phone.display}</strong>
          </a>
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

