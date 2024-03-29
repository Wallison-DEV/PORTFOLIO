import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

import {
    ItemDiv,
    Container,
    ProjectImg,
    CenteredCarousel,
    Content,
    DetailsDiv,
} from './styles'
type ProjectProp = {
    src: string
    data: string
    nome: string
    descricao: string
    link: string
    link2: string
}

const ProjectsList: ProjectProp[] = [
    {
        src: './src/assets/images/eplay.png',
        data: 'Mar 2024',
        nome: 'EPLAY',
        descricao:
            'Este é um projeto de loja de jogos digitais desenvolvido com React, TypeScript e outras tecnologias relacionadas como : integração com API externa para obter dados dos jogos usando createApi do Redux Toolkit, navegação entre seções utilizando React Router, gerenciamento de estado centralizado com Redux, validação de formulários utilizando Yup e Formik .A aplicação consiste em várias páginas, incluindo: Página Inicial, Categorias, Produto, Checkout ',
        link: 'https://github.com/Wallison-DEV/EPLAY',
        link2: 'https://eplay-beta.vercel.app/',
    },
    {
        src: './src/assets/images/weather.png',
        data: 'Fev 2024',
        nome: 'Weather Wise',
        descricao:
            'O "WeatherWise" é uma aplicação web que fornece informações meteorológicas em tempo real para diversas cidades. Com uma interface responsiva e amigável, os usuários podem buscar o clima atual e a previsão do tempo para os próximos dias. Desenvolvido com HTML, CSS e JavaScript, o aplicativo utiliza a API do OpenWeatherMap para obter dados precisos e atualizados. Ideal para quem deseja se manter informado sobre as condições climáticas.',
        link: 'https://github.com/Wallison-DEV/wather_wise',
        link2: 'https://weather-wise-gules.vercel.app/',
    },
    {
        src: './src/assets/images/maps.png',
        data: 'Fev 2024',
        nome: 'Map Search',
        descricao:
            'Este projeto é um aplicativo de mapas desenvolvido de forma autônoma, sem a assistência de tutores. Utilizando a API do Google Maps, o aplicativo proporciona funcionalidades avançadas de visualização e interação com mapas. Seu principal objetivo é criar uma plataforma que permita aos usuários explorar mapas de forma intuitiva, além de visualizar informações geográficas e interagir com pontos de interesse. A aplicação foi desenvolvida com tecnologias web padrão, incluindo HTML, CSS, JavaScript e Ajax.',
        link: 'https://github.com/Wallison-DEV/maps',
        link2: 'https://mapsearch.vercel.app/',
    },
    {
        src: './src/assets/images/todo.png',
        data: 'Mar 2024',
        nome: 'To Do List',
        descricao:
            'Este projeto é uma aplicação de lista de tarefas (To Do List) desenvolvida com Django, Bootstrap e outras tecnologias. Ele apresenta diversas páginas, como a página inicial que lista todas as tarefas, a página de detalhes para informações adicionais sobre uma tarefa e a página de cadastro de novas tarefas.',
        link: 'https://github.com/Wallison-DEV/todo_django',
        link2: 'https://github.com/Wallison-DEV/todo_django',
    },
    {
        src: './src/assets/images/django_blog.png',
        data: 'Jan 2024',
        nome: 'Personal Blog',
        descricao:
            'Este é um projeto de blog desenvolvido utilizando Django, Bootstrap e outras tecnologias relacionadas. A aplicação é composta por várias páginas, incluindo a página inicial que exibe todas as postagens, a página de detalhes que mostra uma postagem com mais informações e a página de cadastro de novas postagens.',
        link: 'https://github.com/Wallison-DEV/django_blog.git',
        link2: 'https://github.com/Wallison-DEV/django_blog.git',
    },
]

const Projects = () => {
    return (
        <Container>
            <div>
                <h1 className="font-bold pb-6 text-5xl mb-6">Projetos</h1>
                <CenteredCarousel>
                    <Content>
                        {ProjectsList.map((project, index) => (
                            <ItemDiv key={index}>
                                <div>
                                    <ProjectImg src={project.src} alt="" />
                                </div>
                                <DetailsDiv>
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
                                        <Button className="flex items-center w-80 mt-4 bg-blue-600 hover:bg-blue-500">
                                            <a
                                                href={project.link2}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Ver Projeto
                                            </a>
                                        </Button>
                                    </div>
                                </DetailsDiv>
                            </ItemDiv>
                        ))}
                    </Content>
                    <CarouselPrevious />
                    <CarouselNext />
                </CenteredCarousel>
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
