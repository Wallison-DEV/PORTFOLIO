import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Wallison - Portfolio',
  description: 'Portfólio profissional de Wallison Dev',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://wallison-dev.com',
    title: 'Wallison - Portfolio',
    description: 'Portfólio profissional de Wallison Dev',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

