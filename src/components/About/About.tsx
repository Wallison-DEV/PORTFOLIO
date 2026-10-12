import { useInView } from 'react-intersection-observer'
import { School, Medal, Briefcase, GraduationCap } from 'lucide-react'
import * as S from './styles'
import AboutImage from '@/assets/images/about.png'
import { Container, PrimaryText } from '@/global'
import { useT } from '@/i18n'

const About = () => {
	const { t } = useT()
	const { ref, inView } = useInView({
		threshold: 0.1,
	})

	return (
		<Container>
			<S.GridContainer ref={ref} className={inView ? 'animate' : ''}>
				<S.AboutContent className={inView ? 'animate' : ''}>
					<S.AboutTitle>{t.about.title}</S.AboutTitle>
					<PrimaryText>{t.about.text}</PrimaryText>
					<S.StatsGrid>
						<S.Card className={inView ? 'animate' : ''}>
							<S.CardContent>
								<S.IconWrapper>
									<Medal size={40} />
								</S.IconWrapper>
								<S.CardText>
									03+ <span>{t.about.years}</span>
								</S.CardText>
							</S.CardContent>
						</S.Card>
						<S.Card className={inView ? 'animate' : ''}>
							<S.CardContent>
								<S.IconWrapper>
									<School size={40} />
								</S.IconWrapper>
								<S.CardText>{t.about.cardEbacCourse}</S.CardText>
							</S.CardContent>
						</S.Card>
						<S.Card className={inView ? 'animate' : ''}>
							<S.CardContent>
								<S.IconWrapper>
									<Briefcase size={40} />
								</S.IconWrapper>
								<S.CardText>{t.about.cardEbacJob}</S.CardText>
							</S.CardContent>
						</S.Card>
						<S.Card className={inView ? 'animate' : ''}>
							<S.CardContent>
								<S.IconWrapper>
									<GraduationCap size={40} />
								</S.IconWrapper>
								<S.CardText>{t.about.cardDegree}</S.CardText>
							</S.CardContent>
						</S.Card>
					</S.StatsGrid>
				</S.AboutContent>
				<S.ImageContainer className={inView ? 'animate' : ''}>
					<S.AboutImg
						src={AboutImage.src}
						alt={t.about.imageAlt}
					/>
				</S.ImageContainer>
			</S.GridContainer>
		</Container>
	)
}

export default About
