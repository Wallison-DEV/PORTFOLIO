import Image from 'next/image'
import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import * as S from './styles'
import * as Img from '@/assets/src'
import { Container, PrimaryTitle, SecondTitle } from '@/global'
import { StyledButton } from '../Hero/styles'
import { useT, projectLinks } from '@/i18n'

const projectsBase = [
	{ src: Img.XCloneImg, nome: 'xClone' },
	{ src: Img.EplayImg, nome: 'EPLAY' },
	{ src: Img.ChatImg, nome: 'ChatApp' },
	{ src: Img.MapsImg, nome: 'Map Search' },
	{ src: Img.TodoImg, nome: 'To Do List' },
]

const Projects = () => {
	const { t } = useT()
	const ProjectsList = projectsBase.map((base, i) => ({
		...base,
		...projectLinks[i],
		...t.projects.list[i],
	}))
	return (
		<Container data-aos="fade-right">
			<div>
				<PrimaryTitle>{t.projects.title}</PrimaryTitle>
				<S.CenteredCarousel>
					<S.Content >
						{ProjectsList.map((project, index) => (
							<S.ItemDiv key={index} data-aos="fade-down">
								<S.ProjectImgDiv data-aos="fade-left">
									<Image src={project.src} alt={project.nome} width={500} height={300} />
								</S.ProjectImgDiv>
								<S.DetailsDiv>
									<div>
										<SecondTitle>{project.nome}</SecondTitle>
										<S.ProjectDate>{project.data}</S.ProjectDate>
									</div>
									<S.Description>{project.descricao}</S.Description>
									<S.ButtonGroup>
										<StyledButton href={project.link} target="_blank" rel="noopener noreferrer">
											{t.projects.viewCode}
										</StyledButton>
										{project.link2 && (
											<StyledButton $secondary href={project.link2} target="_blank" rel="noopener noreferrer">
												{t.projects.viewProject}
											</StyledButton>
										)}
									</S.ButtonGroup>
								</S.DetailsDiv>
							</S.ItemDiv>
						))}
					</S.Content>
					<CarouselPrevious />
					<CarouselNext />
				</S.CenteredCarousel>
				<S.CenterButton>
					<StyledButton $secondary href="https://github.com/Wallison-DEV?tab=repositories" target="_blank" rel="noopener noreferrer">
						{t.projects.more}
					</StyledButton>
				</S.CenterButton>
			</div>
		</Container>
	)
}

export default Projects
