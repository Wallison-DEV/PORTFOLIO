import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

import * as S from './styles'
import * as Img from '@/assets/src'

import { Container } from '@/global'

const ProjectsList: ProjectProp[] = [
	{
		src: Img.XCloneImg,
		data: 'May 2024',
		nome: 'xClone',
		descricao:
			'O Clone do Twitter é uma aplicação web desenvolvida com React.js e Django, proporcionando uma experiência semelhante à popular rede social. Inspirada no Twitter original, esta aplicação permite aos usuários criar, editar, visualizar e interagir com postagens, comentários e retweets. Utilizando tecnologias modernas como Redux Toolkit para gerenciamento de estado e integração com uma API RESTful, o projeto oferece uma plataforma para compartilhar pensamentos, ideias e momentos com uma comunidade virtual.',
		link: 'https://github.com/Wallison-DEV/xClone',
		link2: 'https://x-clone-frontend-neon.vercel.app/'
	},
	{
		src: Img.EplayImg,
		data: 'Mar 2024',
		nome: 'EPLAY',
		descricao:
			'Este é um projeto de loja de jogos digitais desenvolvido com React, TypeScript e outras tecnologias relacionadas como : integração com API externa para obter dados dos jogos usando createApi do Redux Toolkit, navegação entre seções utilizando React Router, gerenciamento de estado centralizado com Redux, validação de formulários utilizando Yup e Formik .A aplicação consiste em várias páginas, incluindo: Página Inicial, Categorias, Produto, Checkout ',
		link: 'https://github.com/Wallison-DEV/EPLAY',
		link2: 'https://eplay-beta.vercel.app/',
	},
	{
		src: Img.ChatImg,
		data: 'Abr 2024',
		nome: 'ChatApp',
		descricao:
			'Este projeto é uma aplicação de chat desenvolvida com Django, REST Framework, Channels e Bootstrap. Permite que os usuários se cadastrem, façam login e conversem em tempo real. Oferece uma interface intuitiva e funcionalidades como lista de contatos, envio de mensagens e visualização de conversas ',
		link: 'https://github.com/Wallison-DEV/django_chat.git',
	},
	{
		src: Img.MapsImg,
		data: 'Fev 2024',
		nome: 'Map Search',
		descricao:
			'Este projeto é um aplicativo de mapas desenvolvido de forma autônoma, sem a assistência de tutores. Utilizando a API do Google Maps, o aplicativo proporciona funcionalidades avançadas de visualização e interação com mapas. Seu principal objetivo é criar uma plataforma que permita aos usuários explorar mapas de forma intuitiva, além de visualizar informações geográficas e interagir com pontos de interesse. A aplicação foi desenvolvida com tecnologias web padrão, incluindo HTML, CSS, JavaScript e Ajax.',
		link: 'https://github.com/Wallison-DEV/maps',
		link2: 'https://mapsearch.vercel.app/',
	},
	{
		src: Img.TodoImg,
		data: 'Mar 2024',
		nome: 'To Do List',
		descricao:
			'Este projeto é uma aplicação de lista de tarefas (To Do List) desenvolvida com Django, Bootstrap e outras tecnologias. Ele apresenta diversas páginas, como a página inicial que lista todas as tarefas, a página de detalhes para informações adicionais sobre uma tarefa e a página de cadastro de novas tarefas.',
		link: 'https://github.com/Wallison-DEV/todo_django',
	},
]

const Projects = () => {
	return (
		<Container>
			<div>
				<h1 className="font-bold pb-6 text-5xl mb-6">Projetos</h1>
				<S.CenteredCarousel>
					<S.Content>
						{ProjectsList.map((project, index) => (
							<S.ItemDiv key={index}>
								<div>
									<S.ProjectImg src={project.src} alt="" />
								</div>
								<S.DetailsDiv>
									<div className="pb-4">
										<span className="text-3xl font-semibold block">
											{project.nome}
										</span>
										<span className="font-semibold block">
											{project.data}
										</span>
									</div>
									<p className="mb-4">{project.descricao}</p>
									<div className="gap-4 flex justify-center items-center">
										<Button className="flex items-center w-80 mt-4 bg-blue-600 hover:bg-blue-500">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												Ver Código
											</a>
										</Button>
										{project.link2 && (
											<Button className="flex items-center w-80 mt-4 bg-blue-600 hover:bg-blue-500">
												<a
													href={project.link2}
													target="_blank"
													rel="noopener noreferrer"
												>
													Ver Projeto
												</a>
											</Button>
										)}

									</div>
								</S.DetailsDiv>
							</S.ItemDiv>
						))}
					</S.Content>
					<CarouselPrevious />
					<CarouselNext />
				</S.CenteredCarousel>
				<div className="flex justify-center md:mt-12">
					<Button className="flex items-center w-80 bg-blue-600 hover:bg-blue-500">
						<a
							href="https://vercel.com/wallisondevs"
							className="text-white text-center w-full"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver mais projetos
						</a>
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default Projects
