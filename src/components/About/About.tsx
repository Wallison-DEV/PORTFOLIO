import { School, Medal } from 'lucide-react';
import * as S from './styles';
import AboutImage from '@/assets/images/about.png';
import { PrimaryTitle, Container, PrimaryText } from '@/global';

const About = () => {
    return (
        <Container>
            <S.GridContainer>
                <S.AboutContent>
                    <PrimaryTitle>Sobre mim</PrimaryTitle>
                    <PrimaryText>
                        Sou um Full Stack Python em formado pela EBAC – Escola Britânica de Artes Criativas e Tecnologia.
                        Um profissional com perfil movido a desafios e constantemente buscando aprimoramento na área de tecnologia.
                        Possuo experiências em React, TypeScript, Django, MySql e habilidades em VueJS.
                    </PrimaryText>
                    <S.StatsGrid>
                        <S.Card>
                            <S.CardContent>
                                <S.IconWrapper>
                                    <Medal size={40} />
                                </S.IconWrapper>
                                <S.CardText>
                                    01+ <span>Anos de experiência</span>
                                </S.CardText>
                            </S.CardContent>
                        </S.Card>
                        <S.Card>
                            <S.CardContent>
                                <S.IconWrapper>
                                    <School size={40} />
                                </S.IconWrapper>
                                <S.CardText>EBAC - Full Stack Python</S.CardText>
                            </S.CardContent>
                        </S.Card>
                    </S.StatsGrid>
                </S.AboutContent>
                <S.ImageContainer>
                    <S.AboutImg
                        src={AboutImage}
                        alt="Imagem decorativa da seção sobre"
                    />
                </S.ImageContainer>
            </S.GridContainer>
        </Container>
    );
};

export default About;
