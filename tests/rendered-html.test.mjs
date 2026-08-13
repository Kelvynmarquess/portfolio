import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        host: "portfolio.example",
        "x-forwarded-host": "portfolio.example",
        "x-forwarded-proto": "https",
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
}

test("server-renderiza o portfólio profissional", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="pt-BR"/i);
  assert.match(html, /<title>Kelvyn Marques \| Recepção e Hospitalidade<\/title>/i);
  assert.match(html, /Kelvyn Marques/);
  assert.match(html, /Recepção e hospitalidade/i);
  assert.match(html, /id="inicio"/);
  assert.match(html, /id="sobre"/);
  assert.match(html, /id="experiencia"/);
  assert.match(html, /id="atuacao"/);
  assert.match(html, /id="formacao"/);
  assert.match(html, /id="contato"/);
  assert.match(html, /href="\/curriculo-kelvyn-marques\.pdf"/);
  assert.match(html, /href="tel:\+5585985800856"/);
  assert.match(html, /\(85\) 985800856/);
  assert.match(html, /mailto:kelvyn_marques@outlook\.com\.br/);
  assert.match(html, /https:\/\/portfolio\.example\/og\.png/);
});

test("não publica conteúdo de starter ou placeholders", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /SkeletonPreview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /Lorem Ipsum|\[COLOCAR|Sua Empresa Aqui|Projeto Exemplo/i);
});

test("inclui os arquivos públicos essenciais", async () => {
  await Promise.all([
    access(new URL("public/curriculo-kelvyn-marques.pdf", projectRoot)),
    access(new URL("public/favicon.svg", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
  ]);
});
