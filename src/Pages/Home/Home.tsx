import { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Project/Projects'
import Contacts from '../../components/Contact/Contacts'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '../../components/ui/navigation-menu'

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="w-screen">
            <div
                style={{ backgroundColor: '#F6F5F5' }}
                className="w-full border-b fixed top-0 left-0 right-0 flex py-3 z-[1] justify-center shadow-md"
            >
                <NavigationMenu className="w-full wrapper flex items-center justify-between px-6 md:px-20">
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="block md:hidden focus:outline-none"
                        >
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
                    <NavigationMenuList
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } md:flex w-full md:w-auto md:flex-row flex-col md:flex-row`}
                    >
                        <NavigationMenuItem className="px-6">
                            <NavigationMenuLink
                                href="#start"
                                className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100"
                            >
                Start
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#about"
                                className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100"
                            >
                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#skills"
                                className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100"
                            >
                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#projects"
                                className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100"
                            >
                Projects
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#contacts"
                                className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100"
                            >
                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
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
