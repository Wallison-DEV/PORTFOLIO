import type { Metadata } from 'next'
import Home from '../../src/pages-home/Home/Home'
import { LangProvider } from '../../src/i18n'

export const metadata: Metadata = {
  title: 'Wallison Costa - Portfolio',
  description: 'Professional portfolio of Wallison Costa, Full Stack Developer',
  alternates: {
    canonical: '/en',
    languages: { 'pt-BR': '/', en: '/en' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wallison-costa.vercel.app/en',
    title: 'Wallison Costa - Portfolio',
    description: 'Professional portfolio of Wallison Costa, Full Stack Developer',
  },
}

export default function Page() {
  return (
    <LangProvider lang="en">
      <Home />
    </LangProvider>
  )
}
