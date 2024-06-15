import { Container, PrimaryTitle, SecondTitle } from '@/global'
import * as S from './styles'
import * as Icons from '@/assets/src'

const SkillsFrontList: SkillProps[] = [
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
]

const SkillsBackList: SkillProps[] = [
	{ src: Icons.PythonImg, language: 'Python' },
	{ src: Icons.MysqlImg, language: 'MySql' },
	{ src: Icons.DjangoImg, language: 'Django' },
	{ src: Icons.RestapiImg, language: 'Rest Api' },
	{ src: Icons.CppImg, language: 'C++' },
]

const Skills = () => {
	return (
		<Container style={{ textAlign: 'center' }}>
			<PrimaryTitle as="h2">Habilidades</PrimaryTitle>
			<SecondTitle>
				Minhas habilidades técnicas em linguagens de programação e estruturas/frameworks
			</SecondTitle>
			<S.SkillsGrid>
				{SkillsFrontList.map((skill, index) => (
					<S.SkillCard key={index}>
						<S.SkillImageDiv>
							<img src={skill.src} alt={skill.language} />
						</S.SkillImageDiv>
						<S.SkillName>{skill.language}</S.SkillName>
					</S.SkillCard>
				))}
			</S.SkillsGrid>
			<S.SkillsGrid>
				{SkillsBackList.map((skill, index) => (
					<S.SkillCard key={index}>
						<S.SkillImageDiv>
							<img src={skill.src} alt={skill.language} />
						</S.SkillImageDiv>
						<S.SkillName>{skill.language}</S.SkillName>
					</S.SkillCard>
				))}
			</S.SkillsGrid>
		</Container>
	)
}

export default Skills
