import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function FocusSection() {
  return (
    <section
      className="section shell"
      id="atuacao"
      aria-labelledby="focus-title"
    >
      <SectionHeading
        id="focus-title"
        eyebrow="Como atuo"
        title="Competências para diferentes contextos"
        description="Habilidades que aplico em equipes, canais e segmentos diversos."
      />
      <div className="focus-grid">
        {profile.focusGroups.map((group, index) => (
          <article className="focus-card" key={group.title}>
            <div className="focus-card-header">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

