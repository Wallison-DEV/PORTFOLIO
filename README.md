# Wallison Costa — Portfolio

Portfólio pessoal construído com [Next.js](https://nextjs.org/) (App Router), TypeScript, styled-components e Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- TypeScript
- styled-components + Tailwind CSS
- Framer Motion / AOS para animações
- React Hook Form + Web3Forms para o formulário de contato

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## SEO

- Metadata, Open Graph e dados estruturados (JSON-LD) configurados em [app/layout.tsx](app/layout.tsx).
- `sitemap.xml` e `robots.txt` gerados dinamicamente em [app/sitemap.ts](app/sitemap.ts) e [app/robots.ts](app/robots.ts).
- Favicon e imagem OG via convenção de arquivos do Next ([app/icon.png](app/icon.png), [app/opengraph-image.png](app/opengraph-image.png)).
