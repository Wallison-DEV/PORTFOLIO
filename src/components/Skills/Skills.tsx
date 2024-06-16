import { Container, PrimaryTitle, SecondTitle } from '@/global';
import * as S from './styles';
import * as Icons from '@/assets/src';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsFrontList = [
	{ src: Icons.ReactImg, language: 'React' },
	{ src: Icons.TsImg, language: 'TypeScript' },
	{ src: Icons.NextjsImg, language: 'Next.js' },
	{ src: Icons.VuejsImg, language: 'Vue.js' },
	{ src: Icons.AjaxImg, language: 'Ajax' },
	{ src: Icons.CssImg, language: 'CSS' },
	{ src: Icons.JsImg, language: 'JavaScript' },
	{ src: Icons.HtmlImg, language: 'HTML' },
	{ src: Icons.SassImg, language: 'Sass' },
	{ src: Icons.BootstrapImg, language: 'Bootstrap' },
	{ src: Icons.GruntImg, language: 'Grunt' },
];

const SkillsBackList = [
	{ src: Icons.PythonImg, language: 'Python' },
	{ src: Icons.MysqlImg, language: 'MySql' },
	{ src: Icons.DjangoImg, language: 'Django' },
	{ src: Icons.RestapiImg, language: 'Rest Api' },
	{ src: Icons.CppImg, language: 'C++' },
];

const Skills = () => {
	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

	return (
		<Container style={{ textAlign: 'center' }}>
			<div ref={ref}>
				<PrimaryTitle as="h2">Habilidades</PrimaryTitle>
				<SecondTitle>Minhas habilidades técnicas em linguagens de programação e estruturas/frameworks</SecondTitle>
				<S.SkillsGrid>
					{SkillsFrontList.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							style={{ width: '88px', margin: '10px' }}
						>
							<S.SkillCard>
								<S.SkillImageDiv>
									<img src={skill.src} alt={skill.language} />
								</S.SkillImageDiv>
								<S.SkillName>{skill.language}</S.SkillName>
							</S.SkillCard>
						</motion.div>
					))}
				</S.SkillsGrid>
				<S.SkillsGrid>
					{SkillsBackList.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: 50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							style={{ width: '88px', margin: '10px' }}
						>
							<S.SkillCard>
								<S.SkillImageDiv>
									<img src={skill.src} alt={skill.language} />
								</S.SkillImageDiv>
								<S.SkillName>{skill.language}</S.SkillName>
							</S.SkillCard>
						</motion.div>
					))}
				</S.SkillsGrid>
			</div>
		</Container>
	);
};

export default Skills;
