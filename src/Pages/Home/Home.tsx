import { useState, useEffect } from 'react'

import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Project/Projects'
import Contacts from '../../components/Contact/Contacts'

import * as S from '../../components/Navbar/styles'

function Home() {
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('')

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleScroll = () => {
		const sections = ['start', 'about', 'skills', 'projects', 'contacts']
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
								className="w-6 h-6 text-gray-800"
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
					<S.NavigationMenuList isOpen={isOpen}>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#start" isActive={activeSection === 'start'}>
								Inicio
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#about" isActive={activeSection === 'about'}>
								Sobre
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#skills" isActive={activeSection === 'skills'}>
								Habilidades
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#projects" isActive={activeSection === 'projects'}>
								Projetos
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
						<S.NavigationMenuItem>
							<S.NavigationMenuLink href="#contacts" isActive={activeSection === 'contacts'}>
								Contatos
							</S.NavigationMenuLink>
						</S.NavigationMenuItem>
					</S.NavigationMenuList>
				</S.NavigationMenu>
			</S.NavbarContainer>
			<div>
				<div id="start">
					<Hero />
				</div>
				<div id="about">
					<About />
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
		</div>
	)
}

export default Home
