import Tilt from 'react-parallax-tilt';
import { Linkedin, Github, Mail, ArrowDownToLine } from 'lucide-react';
import Typical from 'react-typical';
import * as S from './styles';
import HeroImg from '@/assets/images/avatar.png';

const Hero = () => {
	return (
		<S.StyledHeroContainer>
			<S.StyledContainer data-aos="fade-up">
				<div>
					<Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8}>
						<S.StyledImg src={HeroImg} alt="Avatar" />
					</Tilt>
				</div>
				<div>
					<S.StyledH2 data-aos="fade-right">Wallison Costa</S.StyledH2>
					<S.StyledTypicalText>
						<Typical
							steps={[
								"I'm a Software Engineer",
								1000,
								"I'm a Full Stack Developer!",
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
							rel="noopener noreferrer"
							data-aos="fade-left">
							<S.StyledIcon>
								<ArrowDownToLine size={24} />
							</S.StyledIcon>
							<p>Download CV</p>
						</S.StyledButton>
						<S.StyledButton href="#contacts" data-aos="fade-left">
							<S.StyledIcon>
								<Mail size={24} />
							</S.StyledIcon>
							<p>Contact me</p>
						</S.StyledButton>
					</S.StyledButtonContainer>
					<S.StyledSocialLinks>
						<a
							href="https://github.com/Wallison-DEV"
							target="_blank"
							rel="noopener noreferrer"
							data-aos="zoom-in">
							<S.StyledIcon>
								<Github size={24} />
							</S.StyledIcon>
						</a>
						<a
							href="https://www.linkedin.com/in/wallison-python-dev/"
							target="_blank"
							rel="noopener noreferrer"
							data-aos="zoom-in">
							<S.StyledIcon>
								<Linkedin size={24} />
							</S.StyledIcon>
						</a>
					</S.StyledSocialLinks>
				</div>
			</S.StyledContainer>
		</S.StyledHeroContainer>
	);
};

export default Hero;
