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
  role: "Recepcionista",
  specialty: "Hospitalidade e atendimento ao hóspede",
  headline: "Atendimento que transforma estadias em boas experiências.",
  introduction:
    "Profissional de recepção com experiência em hospitalidade, orientado à qualidade do atendimento, à eficiência dos serviços e à satisfação de cada hóspede.",
  about:
    "Busco contribuir para o crescimento do negócio por meio de um atendimento cuidadoso, de práticas de hospitalidade alinhadas às necessidades do mercado e da busca contínua por excelência operacional.",
  phone: {
    display: "(85) 985800856",
    href: "+5585985800856",
  },
  email: "kelvyn_marques@outlook.com.br",
  resumeUrl: "/curriculo-kelvyn-marques.pdf",
  experiences: [
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
      title: "Atendimento",
      items: [
        "Atendimento ao hóspede",
        "Qualidade no atendimento",
        "Satisfação do cliente",
      ],
    },
    {
      title: "Operações",
      items: [
        "Eficiência nos serviços",
        "Excelência operacional",
        "Práticas de hospitalidade",
      ],
    },
    {
      title: "Evolução contínua",
      items: [
        "Busca por inovação",
        "Atenção às necessidades do mercado",
        "Contribuição para resultados",
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
