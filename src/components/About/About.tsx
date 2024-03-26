import { School, Medal } from 'lucide-react'
import { Container } from '../Project/styles'
import {
    AboutImg,
    AboutText,
    AboutTitle,
    Card,
    CardText,
    StatsGrid,
    GridContainer,
} from './styles'
import { CardContent } from '../ui/card'

const About = () => {
    return (
        <Container>
            <GridContainer>
                <div>
                    <AboutTitle>Sobre mim</AboutTitle>
                    <AboutText>
                        Full Stack Python em formação pela EBAC – Escola
                        Britânica de Artes Criativas e Tecnologia. Profissional
                        com perfil movido a desafios e constantemente buscando
                        aprimoramento na área de tecnologia. Possuo experiências
                        em React, TypeScript, Django, MySql e habilidades em
                        VueJS.
                    </AboutText>
                    <StatsGrid>
                        <Card>
                            <CardContent>
                                <div className="flex flex-col items-center justify-center h-full pt-4">
                                    <Medal size={40} />
                                    <CardText className="font-bold">
                                        01+{' '}
                                        <span className="block">
                                            Anos de experiência
                                        </span>
                                    </CardText>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="h-full">
                                <div className="flex flex-col items-center justify-center h-full pt-4">
                                    <School size={40} />
                                    <CardText className="font-bold">
                                        EBAC - Full Stack Python
                                    </CardText>
                                </div>
                            </CardContent>
                        </Card>
                    </StatsGrid>
                </div>
                <div className="flex items-center justify-center">
                    <AboutImg
                        src="./src/assets/images/about.png"
                        alt=""
                        className="w-3/4 md:w-3/4 rounded-full"
                    />
                </div>
            </GridContainer>
        </Container>
    )
}

export default About
