import Home from '../src/pages-home/Home/Home'
import { LangProvider } from '../src/i18n'

export default function Page() {
  return (
    <LangProvider lang="pt">
      <Home />
    </LangProvider>
  )
}
