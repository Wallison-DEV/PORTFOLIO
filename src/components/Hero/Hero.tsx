import { Linkedin, Github, Mail, ArrowDownToLine } from 'lucide-react'
import Typical from 'react-typical'

import * as S from './styles'

import HeroImg from '@/assets/images/avatar.png'

const Hero = () => {
	return (
		<S.StyledHeroContainer>
			<S.StyledContainer>
				<div>
					<S.StyledImg src={HeroImg} alt="Avatar" />
				</div>
				<div>
					<S.StyledH2>Wallison Costa</S.StyledH2>
					<S.StyledTypicalText>
						<Typical
							steps={[
								'I\'m a Software Engineer',
								1000,
								'I\'m a Full Stack Developer!',
								500,
								'',
								500,
							]}
							loop={Infinity}
							wrapper="h1"
						/>
					</S.StyledTypicalText>
					<S.StyledButtonContainer>
						<S.StyledButton
							href="https://drive.usercontent.google.com/u/0/uc?id=1iDY0RGvkb69p0nU-URLHdLG4Rqy3RuZe&export=download"
							target="_blank"
							rel="noopener noreferrer">
							<S.StyledIcon><ArrowDownToLine size={24} /></S.StyledIcon>
							<p>
                                Download CV
							</p>
						</S.StyledButton>
						<S.StyledButton href="#contacts">
							<S.StyledIcon><Mail size={24} /></S.StyledIcon>
							<p >Contact me</p>
						</S.StyledButton>
					</S.StyledButtonContainer>
					<S.StyledSocialLinks>
						<a
							href="https://github.com/Wallison-DEV"
							target="_blank"
							rel="noopener noreferrer"
						>
							<S.StyledIcon><Github size={24} /></S.StyledIcon>
						</a>
						<a
							href="https://www.linkedin.com/in/wallison-python-dev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<S.StyledIcon><Linkedin size={24} /></S.StyledIcon>
						</a>
					</S.StyledSocialLinks>
				</div>
			</S.StyledContainer>
		</S.StyledHeroContainer>
	)
}

export default Hero
