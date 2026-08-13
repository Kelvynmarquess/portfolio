import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const repository = process.env.GITHUB_REPOSITORY ?? "kelvyn-marques/portfolio";
const [owner, repositoryName] = repository.split("/");

if (!owner || !repositoryName) {
  throw new Error("GITHUB_REPOSITORY deve estar no formato proprietario/repositorio");
}

const isUserSite = repositoryName.toLowerCase() === `${owner}.github.io`.toLowerCase();
const basePath = process.env.PAGES_BASE_PATH ?? (isUserSite ? "" : `/${repositoryName}`);
const origin = process.env.PAGES_ORIGIN ?? `https://${owner}.github.io`;
const publicUrl = `${origin}${basePath}/`;
const outputDirectory = path.resolve("dist/pages");
const workerUrl = pathToFileURL(path.resolve("dist/server/index.js"));
workerUrl.searchParams.set("static-export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(`${origin}/`, {
    headers: {
      accept: "text/html",
      host: new URL(publicUrl).host,
      "x-forwarded-host": new URL(publicUrl).host,
      "x-forwarded-proto": new URL(publicUrl).protocol.slice(0, -1),
    },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Falha ao renderizar a pagina: HTTP ${response.status}`);
}

let html = await response.text();
const staticPrefix = `${basePath}/`;

html = html
  .replaceAll('href="/_next/', `href="${staticPrefix}_next/`)
  .replaceAll('src="/_next/', `src="${staticPrefix}_next/`)
  .replaceAll('href="/curriculo-kelvyn-marques.pdf"', `href="${staticPrefix}curriculo-kelvyn-marques.pdf"`)
  .replaceAll('href="/favicon.svg"', `href="${staticPrefix}favicon.svg"`)
  .replaceAll(`${origin}/og.png`, `${publicUrl}og.png`)
  .replaceAll(`${origin}/favicon.svg`, `${publicUrl}favicon.svg`)
  .replaceAll(`href="${origin}/"`, `href="${publicUrl}"`);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(path.resolve("dist/client"), outputDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(outputDirectory, "index.html"), html),
  writeFile(path.join(outputDirectory, "404.html"), html),
  writeFile(path.join(outputDirectory, ".nojekyll"), ""),
  writeFile(
    path.join(outputDirectory, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${publicUrl}sitemap.xml\n`,
  ),
  writeFile(
    path.join(outputDirectory, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${publicUrl}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>\n`,
  ),
]);

console.log(`Exportacao estatica criada em ${outputDirectory}`);
console.log(`URL publica esperada: ${publicUrl}`);
