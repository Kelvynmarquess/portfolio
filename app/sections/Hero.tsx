import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">{profile.specialty}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-introduction">{profile.introduction}</p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="button button-primary" href="#experiencia">
            Conheça minha experiência
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>
          <a className="text-link" href={profile.resumeUrl} download>
            Baixar currículo <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>

      <aside className="hero-card" aria-label="Resumo profissional">
        <div className="monogram" aria-hidden="true">
          {profile.initials}
        </div>
        <div className="summary-list">
          <div>
            <span>Atuação</span>
            <strong>Atendimento presencial e remoto</strong>
          </div>
          <div>
            <span>Formação atual</span>
            <strong>Engenharia de Software — cursando</strong>
          </div>
          <div>
            <span>Diferenciais</span>
            <strong>Tecnologia e espanhol cotidiano</strong>
          </div>
        </div>
      </aside>
    </section>
  );
}

