# Portfólio profissional - Kelvyn Marques

Portfólio e currículo online de Kelvyn Marques, com foco em recepção,
hospitalidade e atendimento ao hóspede. O projeto reúne apresentação,
experiência profissional, formação e canais de contato em uma interface
responsiva e acessível.

## Tecnologias

- React 19
- TypeScript
- Vinext e Vite
- Tailwind CSS 4
- Cloudflare Workers / OpenAI Sites
- GitHub Pages (exportação estática)
- GitHub Actions

## Execução local

Requisitos: Node.js 22.13 ou superior e pnpm 11.

```bash
pnpm install
pnpm dev
```

A aplicação ficará disponível, por padrão, em `http://localhost:3000`.

## Validação

```bash
pnpm typecheck
pnpm lint
pnpm test
```

O script de teste gera o build de produção e valida o HTML renderizado.

## Estrutura principal

```text
app/
  components/   componentes interativos e reutilizáveis
  data/         fonte única dos dados profissionais
  sections/     seções da página
  layout.tsx    metadados, tema e estrutura raiz
  page.tsx      composição da página
public/         currículo, favicon e imagem social
tests/          verificações do HTML de produção
worker/         entrada do Cloudflare Worker
```

## Deploy

O site pode ser publicado pelo OpenAI Sites e pelo GitHub Pages. A integração
contínua executa checagem de tipos, lint, testes e build a cada push ou pull
request para `main`. O workflow de Pages gera uma versão estática com o caminho
base do repositório e publica automaticamente após cada push em `main`.

URLs públicas:

- [GitHub Pages](https://kelvynmarquess.github.io/portfolio/)
- [OpenAI Sites](https://kelvyn-marques-portfolio.kelvynplayer2406.chatgpt.site)

Repositório público: [Kelvynmarquess/portfolio](https://github.com/Kelvynmarquess/portfolio)

## Privacidade

Nenhuma credencial ou chave privada é necessária no cliente. Arquivos de
ambiente, dependências e artefatos locais de build são ignorados pelo Git.
