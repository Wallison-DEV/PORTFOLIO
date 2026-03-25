import type { Metadata } from 'next'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'Wallison | Desenvolvedor Full Stack',
  description:
    'Portfolio de Wallison, desenvolvedor Full Stack especializado em React, TypeScript e Node.js. Confira meus projetos e habilidades.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'typescript', 'nodejs', 'portfolio'],
  authors: [{ name: 'Wallison' }],
  openGraph: {
    title: 'Wallison | Desenvolvedor Full Stack',
    description:
      'Portfolio de Wallison, desenvolvedor Full Stack especializado em React, TypeScript e Node.js.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallison | Desenvolvedor Full Stack',
    description:
      'Portfolio de Wallison, desenvolvedor Full Stack especializado em React, TypeScript e Node.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
