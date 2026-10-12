'use client'

import { createContext, useContext, type ReactNode } from 'react'

export type Lang = 'pt' | 'en'

const projectLinks = [
	{ link: 'https://github.com/Wallison-DEV/xClone', link2: 'https://x-clone-frontend-neon.vercel.app/' },
	{ link: 'https://github.com/Wallison-DEV/EPLAY', link2: 'https://eplay-beta.vercel.app/' },
	{ link: 'https://github.com/Wallison-DEV/django_chat.git', link2: undefined },
	{ link: 'https://github.com/Wallison-DEV/maps', link2: 'https://mapsearch.vercel.app/' },
	{ link: 'https://github.com/Wallison-DEV/todo_django', link2: undefined },
]

export const dict = {
	pt: {
		htmlLang: 'pt-BR',
		nav: {
			start: 'Inicio',
			about: 'Sobre',
			skills: 'Habilidades',
			projects: 'Projetos',
			contacts: 'Contatos',
			experience: 'Experiência',
			langAria: 'Idioma',
			themeToDark: 'Ativar modo escuro',
			themeToLight: 'Ativar modo claro',
		},
		hero: {
			phrases: ['Sou um Engenheiro de Software', 'Sou um Desenvolvedor Full Stack!'],
			downloadCv: 'Baixar CV',
			contactMe: 'Fale comigo',
			cvHref: '/CV_Wallison_Costa_PT.pdf',
			avatarAlt: 'Foto de Wallison Costa',
			tagline: 'Full-Stack · React · Django · Supabase',
		},
		about: {
			title: 'Sobre mim',
			text: 'Sou desenvolvedor Full Stack, formado pela EBAC – Escola Britânica de Artes Criativas e Tecnologia. Hoje atuo na Holy Learning, no desenvolvimento de uma plataforma de gestão acadêmica e financeira com React, TypeScript e Supabase, incluindo integrações de pagamento e contratos. Também atuo como freelancer com Django, Node.js e MySql. Sigo estudando Engenharia de Software e buscando aprimoramento constante na área de tecnologia.',
			years: 'Anos de experiência',
			cardEbacCourse: 'EBAC - Full Stack Python',
			cardEbacJob: 'Desenvolvedor na Holy Learning',
			cardDegree: 'Estácio - Engenharia de Software',
			imageAlt: 'Imagem decorativa da seção sobre',
		},
		experience: {
			title: 'Experiência profissional',
			present: 'Atualmente',
			jobs: [
				{
					role: 'Desenvolvedor',
					company: 'Holy Learning',
					period: '03/2026',
					context: 'Holy Learning Hub – plataforma de gestão acadêmica e financeira',
					bullets: [
						'Desenvolvimento full-stack com React, TypeScript, Vite, React Query e Tailwind/shadcn no front-end, e Supabase (PostgreSQL, Auth e Edge Functions) no back-end.',
						'Integração com o Asaas: cobranças, assinaturas, checkout, negociação de débitos, inadimplência e webhooks, com rotina automática de cobrança (cron).',
						'Fluxo de contratos com Clicksign (envio, assinatura e confirmação por e-mail) e criação de alunos a partir dos eventos de pagamento.',
						'Módulo de avaliações (escrita, oral, boletim e recuperação) e controle de frequência das aulas, com integração ao Google Meet.',
						'Notificações por Web Push e e-mail via cron, e modelagem de dados com mais de 170 migrations versionadas.',
					],
				},
				{
					role: 'Desenvolvedor Full-Stack Python',
					company: 'Freelance',
					period: '02/2023',
					context: '',
					bullets: [
						'Desenvolvimento e manutenção de páginas web responsivas para clientes, com React e TypeScript no front-end e Django ou Node.js no back-end.',
						'APIs REST, integração com MySQL, estilização com Bootstrap, Sass e Less, e automação de tarefas com Gulp.',
						'Testes de front-end com Jest e Cypress e de back-end com Pytest; ambientes padronizados com Docker e versionamento com Git.',
					],
				},
			],
		},		skills: {
			title: 'Habilidades',
			subtitle: 'Minhas habilidades técnicas em linguagens de programação e estruturas/frameworks',
			groups: ['Front-end', 'Back-end e dados', 'Plataforma e integrações'],
		},
		projects: {
			title: 'Projetos',
			viewCode: 'Ver Código',
			viewProject: 'Ver Projeto',
			more: 'Ver mais projetos',
			list: [
				{
					data: 'Mai 2024',
					descricao:
						'O Clone do Twitter é uma aplicação web desenvolvida com React.js e Django, proporcionando uma experiência semelhante à popular rede social. Inspirada no Twitter original, esta aplicação permite aos usuários criar, editar, visualizar e interagir com postagens, comentários e retweets. Utilizando tecnologias modernas como Redux Toolkit para gerenciamento de estado e integração com uma API RESTful, o projeto oferece uma plataforma para compartilhar pensamentos, ideias e momentos com uma comunidade virtual.',
				},
				{
					data: 'Mar 2024',
					descricao:
						'Este é um projeto de loja de jogos digitais desenvolvido com React, TypeScript e outras tecnologias relacionadas como : integração com API externa para obter dados dos jogos usando createApi do Redux Toolkit, navegação entre seções utilizando React Router, gerenciamento de estado centralizado com Redux, validação de formulários utilizando Yup e Formik .A aplicação consiste em várias páginas, incluindo: Página Inicial, Categorias, Produto, Checkout ',
				},
				{
					data: 'Abr 2024',
					descricao:
						'Este projeto é uma aplicação de chat desenvolvida com Django, REST Framework, Channels e Bootstrap. Permite que os usuários se cadastrem, façam login e conversem em tempo real. Oferece uma interface intuitiva e funcionalidades como lista de contatos, envio de mensagens e visualização de conversas ',
				},
				{
					data: 'Fev 2024',
					descricao:
						'Este projeto é um aplicativo de mapas desenvolvido de forma autônoma, sem a assistência de tutores. Utilizando a API do Google Maps, o aplicativo proporciona funcionalidades avançadas de visualização e interação com mapas. Seu principal objetivo é criar uma plataforma que permita aos usuários explorar mapas de forma intuitiva, além de visualizar informações geográficas e interagir com pontos de interesse. A aplicação foi desenvolvida com tecnologias web padrão, incluindo HTML, CSS, JavaScript e Ajax.',
				},
				{
					data: 'Mar 2024',
					descricao:
						'Este projeto é uma aplicação de lista de tarefas (To Do List) desenvolvida com Django, Bootstrap e outras tecnologias. Ele apresenta diversas páginas, como a página inicial que lista todas as tarefas, a página de detalhes para informações adicionais sobre uma tarefa e a página de cadastro de novas tarefas.',
				},
			],
		},
		contact: {
			title: 'Como você pode me contatar',
			email: 'Email',
			phone: 'Telefone',
			social: 'Adicione nas redes',
			sendEmail: 'Enviar e-mail',
			name: 'Nome',
			emailPlaceholder: 'Email',
			message: 'Mensagem...',
			required: 'Este campo é obrigatório',
			send: 'Enviar Mensagem',
			success: 'Mensagem enviada com sucesso.',
		},
	},
	en: {
		htmlLang: 'en',
		nav: {
			start: 'Home',
			about: 'About',
			skills: 'Skills',
			projects: 'Projects',
			contacts: 'Contact',
			experience: 'Experience',
			langAria: 'Language',
			themeToDark: 'Switch to dark mode',
			themeToLight: 'Switch to light mode',
		},
		hero: {
			phrases: ["I'm a Software Engineer", "I'm a Full Stack Developer!"],
			downloadCv: 'Download CV',
			contactMe: 'Contact me',
			cvHref: '/CV_Wallison_Costa_EN.pdf',
			avatarAlt: 'Photo of Wallison Costa',
			tagline: 'Full-Stack · React · Django · Supabase',
		},
		about: {
			title: 'About me',
			text: "I'm a Full Stack developer, a graduate of EBAC – British School of Creative Arts and Technology. I currently work at Holy Learning, building an academic and financial management platform with React, TypeScript and Supabase, including payment and contract integrations. I also work as a freelancer with Django, Node.js and MySQL. I'm studying Software Engineering and always looking to keep improving in technology.",
			years: 'Years of experience',
			cardEbacCourse: 'EBAC - Full Stack Python',
			cardEbacJob: 'Developer at Holy Learning',
			cardDegree: 'Estácio - Software Engineering',
			imageAlt: 'Decorative image for the about section',
		},
		experience: {
			title: 'Professional experience',
			present: 'Present',
			jobs: [
				{
					role: 'Developer',
					company: 'Holy Learning',
					period: '03/2026',
					context: 'Holy Learning Hub – academic and financial management platform',
					bullets: [
						'Full-stack development using React, TypeScript, Vite, React Query and Tailwind/shadcn on the front end, and Supabase (PostgreSQL, Auth and Edge Functions) on the back end.',
						'Asaas integration: charges, subscriptions, checkout, debt negotiation, delinquency handling and webhooks, with an automated collection routine (cron).',
						'Contract workflow with Clicksign (sending, signing and email confirmation) and student creation triggered by payment events.',
						'Assessment module (written, oral, report card and make-up exams) and lesson attendance tracking, integrated with Google Meet.',
						'Push and email notifications through cron jobs, and data modeling with over 170 versioned migrations.',
					],
				},
				{
					role: 'Python Full-Stack Developer',
					company: 'Freelance',
					period: '02/2023',
					context: '',
					bullets: [
						'Built and maintained responsive web pages for clients, using React and TypeScript on the front end and Django or Node.js on the back end.',
						'REST APIs, MySQL integration, styling with Bootstrap, Sass and Less, and task automation with Gulp.',
						'Front-end testing with Jest and Cypress and back-end testing with Pytest; standardized environments with Docker and version control with Git.',
					],
				},
			],
		},		skills: {
			title: 'Skills',
			subtitle: 'My technical skills in programming languages and frameworks',
			groups: ['Front-end', 'Back-end and data', 'Platform and integrations'],
		},
		projects: {
			title: 'Projects',
			viewCode: 'View Code',
			viewProject: 'View Project',
			more: 'See more projects',
			list: [
				{
					data: 'May 2024',
					descricao:
						'The Twitter Clone is a web application built with React.js and Django, offering an experience similar to the popular social network. Inspired by the original Twitter, it lets users create, edit, view and interact with posts, comments and retweets. Using modern technologies such as Redux Toolkit for state management and integration with a RESTful API, the project provides a platform to share thoughts, ideas and moments with a virtual community.',
				},
				{
					data: 'Mar 2024',
					descricao:
						'This is a digital game store built with React, TypeScript and related technologies, including: integration with an external API to fetch game data using Redux Toolkit\'s createApi, navigation between sections with React Router, centralized state management with Redux, and form validation with Yup and Formik. The application has several pages, including Home, Categories, Product and Checkout.',
				},
				{
					data: 'Apr 2024',
					descricao:
						'This project is a chat application built with Django, REST Framework, Channels and Bootstrap. It lets users sign up, log in and talk in real time. It offers an intuitive interface and features such as a contact list, message sending and conversation history.',
				},
				{
					data: 'Feb 2024',
					descricao:
						'This project is a maps application developed independently, without the help of tutors. Using the Google Maps API, it provides advanced map visualization and interaction features. Its main goal is to let users explore maps intuitively, view geographic information and interact with points of interest. It was built with standard web technologies, including HTML, CSS, JavaScript and Ajax.',
				},
				{
					data: 'Mar 2024',
					descricao:
						'This project is a To Do List application built with Django, Bootstrap and other technologies. It has several pages, such as the home page listing all tasks, a details page with additional information about a task, and a page to register new tasks.',
				},
			],
		},
		contact: {
			title: 'How you can reach me',
			email: 'Email',
			phone: 'Phone',
			social: 'Find me online',
			sendEmail: 'Send an email',
			name: 'Name',
			emailPlaceholder: 'Email',
			message: 'Message...',
			required: 'This field is required',
			send: 'Send Message',
			success: 'Message sent successfully.',
		},
	},
} as const

export { projectLinks }

const LangContext = createContext<Lang>('pt')

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
	return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useT() {
	const lang = useContext(LangContext)
	return { lang, t: dict[lang] }
}
