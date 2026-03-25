import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import { Linkedin, Github, Mail, ArrowDownToLine } from 'lucide-react';
import * as S from './styles';
import HeroImg from '@/assets/images/avatar.png';

const phrases = ["Sou um Engenheiro de Software", "Sou um Desenvolvedor Full Stack!"];

const Hero = () => {
	const [typedText, setTypedText] = useState('');
	const currentPhraseIndex = useRef(0);
	const isDeleting = useRef(false);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});

		const typingDelay = 120;
		const deleteDelay = 60;
		const holdDelay = 1500;

		let timeout: string | number | NodeJS.Timeout | undefined;

		const tick = () => {
			const currentPhrase = phrases[currentPhraseIndex.current];

			if (!isDeleting.current) {
				setTypedText(prev => {
					const next = currentPhrase.substring(0, prev.length + 1);

					if (next === currentPhrase) {
						timeout = setTimeout(() => {
							isDeleting.current = true;
						}, holdDelay);
					}

					return next;
				});
			} else {
				setTypedText(prev => {
					const next = prev.substring(0, prev.length - 1);

					if (next === '') {
						isDeleting.current = false;
						currentPhraseIndex.current =
							(currentPhraseIndex.current + 1) % phrases.length;
					}

					return next;
				});
			}
		};

		const interval = setInterval(
			tick,
			isDeleting.current ? deleteDelay : typingDelay
		);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, []);


	return (
		<S.StyledHeroContainer>
			<S.StyledContainer data-aos="fade-up">
				<div>
					<Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8}>
						<S.StyledImg src={HeroImg.src} alt="Avatar" />
					</Tilt>
				</div>
				<div>
					<S.StyledH2 data-aos="fade-right">Wallison Costa</S.StyledH2>
					<S.StyledTypicalText>
						{typedText}
					</S.StyledTypicalText>
					<S.StyledButtonContainer data-aos="fade-left">
						<S.StyledButton
							href="https://drive.usercontent.google.com/u/0/uc?id=1iDY0RGvkb69p0nU-URLHdLG4Rqy3RuZe&export=download"
							target="_blank"
							rel="noopener noreferrer"
						>
							<S.StyledIcon>
								<ArrowDownToLine size={24} />
							</S.StyledIcon>
							<p>Download CV</p>
						</S.StyledButton>
						<S.StyledButton href="#contacts" >
							<S.StyledIcon>
								<Mail size={24} />
							</S.StyledIcon>
							<p>Contact me</p>
						</S.StyledButton>
					</S.StyledButtonContainer>
					<S.StyledSocialLinks data-aos="zoom-in">
						<a
							href="https://github.com/Wallison-DEV"
							target="_blank"
							rel="noopener noreferrer"
						>
							<S.StyledIcon>
								<Github size={24} />
							</S.StyledIcon>
						</a>
						<a
							href="https://www.linkedin.com/in/wallison-python-dev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<S.StyledIcon>
								<Linkedin size={24} />
							</S.StyledIcon>
						</a>
					</S.StyledSocialLinks>
				</div>
			</S.StyledContainer>
		</S.StyledHeroContainer >
	);
};

export default Hero;
