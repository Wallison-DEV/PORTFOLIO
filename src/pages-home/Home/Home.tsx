'use client'

import { useState, useEffect } from 'react'

import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Project/Projects'
import Contacts from '../../components/Contact/Contacts'
import { useRouter } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'
import { useT } from '../../i18n'
import { useTheme } from '../../theme'

import * as S from '../../components/Navbar/styles'

function Home() {
	const { t, lang } = useT()
	const { theme, toggleTheme, mounted } = useTheme()
	const router = useRouter()

	const toggleLang = () => {
		router.push(lang === 'pt' ? '/en' : '/')
	}
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('')

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleScroll = () => {
		const sections = ['start', 'about', 'experience', 'skills', 'projects', 'contacts']
		const scrollPos = window.scrollY + window.innerHeight / 2

		for (const section of sections) {
			const element = document.getElementById(section)
			if (element) {
				const { offsetTop, offsetHeight } = element
				if (scrollPos > offsetTop && scrollPos < offsetTop + offsetHeight) {
					setActiveSection(section)
					break
				}
			}
		}
	}

	useEffect(() => {
		document.documentElement.lang = t.htmlLang
	}, [t.htmlLang])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div>
			<S.NavbarContainer>
				<S.NavigationMenu>
					<div className='hamburguer'>
						<button onClick={toggleMenu}>
							<svg
								width={24}
								height={24}
								style={{ color: 'var(--text-strong)' }}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						</button>
					</div>
					<S.NavigationMenuList $isOpen={isOpen}>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#start" $isActive={activeSection === 'start'}>
								{t.nav.start}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#about" $isActive={activeSection === 'about'}>
								{t.nav.about}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#experience" $isActive={activeSection === 'experience'}>
								{t.nav.experience}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#skills" $isActive={activeSection === 'skills'}>
								{t.nav.skills}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#projects" $isActive={activeSection === 'projects'}>
								{t.nav.projects}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#contacts" $isActive={activeSection === 'contacts'}>
								{t.nav.contacts}
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
					</S.NavigationMenuList>
						<S.Controls>
							<S.LangSwitch
								type="button"
								role="switch"
								aria-checked={lang === 'en'}
								aria-label={t.nav.langAria}
								title={t.nav.langAria}
								$isEn={lang === 'en'}
								onClick={toggleLang}
							>
								<span>PT</span>
								<span>EN</span>
							</S.LangSwitch>
							<S.ThemeButton type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark} title={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}>
								{mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} style={{ visibility: 'hidden' }} />}
							</S.ThemeButton>
						</S.Controls>
				</S.NavigationMenu>
			</S.NavbarContainer>
			<div>
				<div id="start">
					<Hero />
				</div>
				<div id="about">
					<About />
				</div>
				<div id="experience">
					<Experience />
				</div>
				<div id="skills">
					<Skills />
				</div>
				<div id="projects">
					<Projects />
				</div>
				<div id="contacts">
					<Contacts />
				</div>
			</div>
			<S.Footer>© {new Date().getFullYear()} Wallison Costa</S.Footer>
		</div>
	)
}

export default Home
