import React from 'react'

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
        data: 'Apr 2024',
        nome: 'EPLAY',
        descricao:
            'Este é um projeto de loja de jogos digitais desenvolvido com React, TypeScript e outras tecnologias relacionadas como : integração com API externa para obter dados dos jogos usando createApi do Redux Toolkit, navegação entre seções utilizando React Router, gerenciamento de estado centralizado com Redux, validação de formulários utilizando Yup e Formik .A aplicação consiste em várias páginas, incluindo: Página Inicial, Categorias, Produto, Checkout ',
        link: 'https://github.com/Wallison-DEV/EPLAY',
        link2: 'https://eplay-beta.vercel.app/',
    },
    {
        src: './src/assets/images/django_blog.png',
        data: 'Jan 2024',
        nome: 'Django Blog',
        descricao:
            'Este é um projeto de blog desenvolvido utilizando Django, Bootstrap e outras tecnologias relacionadas. A aplicação é composta por várias páginas, incluindo a página inicial que exibe todas as postagens, a página de detalhes que mostra uma postagem com mais informações e a página de cadastro de novas postagens.',
        link: 'https://github.com/Wallison-DEV/django_blog.git',
        link2: 'https://eplay-beta.vercel.app/',
    },
    {
        src: './src/assets/images/maps.png',
        data: 'Feb 2024',
        nome: 'Map Search',
        descricao:
            'Este projeto é um aplicativo de mapas desenvolvido de forma autônoma, sem a assistência de tutores. Utilizando a API do Google Maps, o aplicativo proporciona funcionalidades avançadas de visualização e interação com mapas. Seu principal objetivo é criar uma plataforma que permita aos usuários explorar mapas de forma intuitiva, além de visualizar informações geográficas e interagir com pontos de interesse. A aplicação foi desenvolvida com tecnologias web padrão, incluindo HTML, CSS, JavaScript e Ajax.',
        link: 'https://github.com/Wallison-DEV/maps',
        link2: 'https://mapsearch.vercel.app/',
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
            </div>
        </Container>
    )
}

export default Projects
