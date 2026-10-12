import Image from 'next/image'
import { Container, PrimaryTitle } from '@/global';
import * as S from './styles';
import * as Icons from '@/assets/src';
import { motion } from 'framer-motion';
import { Zap, Database, Wind, RefreshCw, CreditCard, FileSignature, Bell } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useT } from '@/i18n';

const SkillsFrontList = [
	{ src: Icons.ReactImg, language: 'React' },
	{ src: Icons.TsImg, language: 'TypeScript' },
	{ src: Icons.NextjsImg, language: 'Next.js' },
	{ src: Icons.ReduxImg, language: 'Redux' },
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
	{ src: Icons.NodejsImg, language: 'Node.js' },
	{ src: Icons.DockerImg, language: 'Docker' },
	{ src: Icons.GitImg, language: 'Git' },
	{ src: Icons.CppImg, language: 'C++' },
];
const SkillsPlatformList = [
	{ Icon: Zap, color: '#3ecf8e', language: 'Supabase' },
	{ Icon: Database, color: '#4f8fc6', language: 'PostgreSQL' },
	{ Icon: Wind, color: '#38bdf8', language: 'Tailwind CSS' },
	{ Icon: RefreshCw, color: '#ff4154', language: 'React Query' },
	{ Icon: CreditCard, color: '#2f6bff', language: 'Asaas' },
	{ Icon: FileSignature, color: '#8b5cf6', language: 'Clicksign' },
	{ Icon: Bell, color: '#f59e0b', language: 'Web Push' },
];
const Skills = () => {
	const { t } = useT();
	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

	return (
		<Container style={{ textAlign: 'center' }}>
			<div ref={ref}>
				<PrimaryTitle as="h2">{t.skills.title}</PrimaryTitle>
				<S.Subtitle>{t.skills.subtitle}</S.Subtitle>
				<S.GroupLabel>{t.skills.groups[0]}</S.GroupLabel>
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
									<Image src={skill.src} alt={skill.language} width={88} height={88} />
								</S.SkillImageDiv>
								<S.SkillName>{skill.language}</S.SkillName>
							</S.SkillCard>
						</motion.div>
					))}
				</S.SkillsGrid>
				<S.GroupLabel>{t.skills.groups[1]}</S.GroupLabel>
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
									<Image src={skill.src} alt={skill.language} width={88} height={88} />
								</S.SkillImageDiv>
								<S.SkillName>{skill.language}</S.SkillName>
							</S.SkillCard>
						</motion.div>
					))}
				</S.SkillsGrid>
				<S.GroupLabel>{t.skills.groups[2]}</S.GroupLabel>
				<S.SkillsGrid>
					{SkillsPlatformList.map(({ Icon, color, language }, index) => (
						<motion.div
							key={language}
							initial={{ opacity: 0, x: -50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							style={{ width: '88px', margin: '10px' }}
						>
							<S.SkillCard>
								<S.SkillImageDiv>
									<Icon size={40} color={color} strokeWidth={1.75} aria-hidden="true" />
								</S.SkillImageDiv>
								<S.SkillName>{language}</S.SkillName>
							</S.SkillCard>
						</motion.div>
					))}
				</S.SkillsGrid>			</div>
		</Container>
	);
};

export default Skills;
