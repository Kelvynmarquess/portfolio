export type Experience = {
  company: string;
  role: string;
  period: string;
};

export type Education = {
  institution: string;
  course: string;
  period: string;
  status: string;
};

export type FocusGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Kelvyn Marques",
  initials: "KM",
  role: "Profissional de atendimento",
  specialty: "Atendimento presencial e remoto • Tecnologia • Espanhol",
  headline: "Comunicação clara, adaptação rápida e facilidade com tecnologia.",
  introduction:
    "Profissional com experiência em atendimento ao cliente presencial e remoto, comunicação clara e resolução de demandas, preparado para atuar em diferentes segmentos.",
  about:
    "Tenho facilidade para aprender novos processos, sistemas e ferramentas digitais. Consigo atender e me comunicar em espanhol em situações cotidianas, trabalho bem em equipe e curso Engenharia de Software, formação que amplia minha visão sobre tecnologia.",
  phone: {
    display: "(85) 985800856",
    href: "+5585985800856",
  },
  email: "kelvyn_marques@outlook.com.br",
  resumeUrl: "/curriculo-kelvyn-marques.pdf",
  experiences: [
    {
      company: "Concentrix Brasil",
      role: "Atendente",
      period: "Julho de 2025 - dezembro de 2025",
    },
    {
      company: "Mandi Collection",
      role: "Recepcionista",
      period: "2023 - 2025",
    },
    {
      company: "Grupo Blue - My Blue, Blue Residence, Rox e All Blue",
      role: "Recepcionista",
      period: "2023",
    },
  ] satisfies Experience[],
  focusGroups: [
    {
      title: "Atendimento multicanal",
      items: [
        "Atendimento presencial",
        "Atendimento remoto",
        "Escuta e resolução de demandas",
      ],
    },
    {
      title: "Comunicação",
      items: [
        "Comunicação clara",
        "Espanhol em situações cotidianas",
        "Trabalho em equipe",
      ],
    },
    {
      title: "Tecnologia e aprendizado",
      items: [
        "Facilidade com sistemas e ferramentas digitais",
        "Adaptação a novos processos",
        "Engenharia de Software em formação",
      ],
    },
  ] satisfies FocusGroup[],
  education: [
    {
      institution: "Faculdade Anhanguera",
      course: "Bacharelado em Engenharia de Software",
      period: "2024 - 2028",
      status: "Cursando",
    },
    {
      institution: "E.E.E.M. Mariano Martins",
      course: "Ensino Médio",
      period: "2020 - 2022",
      status: "Concluído",
    },
  ] satisfies Education[],
  projects: [],
  certifications: [],
  languages: [],
} as const;

export type Profile = typeof profile;

