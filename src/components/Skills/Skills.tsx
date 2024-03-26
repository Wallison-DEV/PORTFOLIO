import {
    SkillCard,
    SkillImage,
    SkillName,
    SkillsContainer,
    SkillsGrid,
    SkillsSubtitle,
    SkillsTitle,
} from './styles'

type SkillProps = {
    src: string
    language: string
}

const SkillsFrontList: SkillProps[] = [
    { src: 'src/assets/icons/react.png', language: 'React' },
    { src: 'src/assets/icons/ts.png', language: 'TypeScript' },
    { src: 'src/assets/icons/sass.png', language: 'Sass' },
    { src: 'src/assets/icons/bootstrap.png', language: 'Bootstrap' },
    { src: 'src/assets/icons/ajax.png', language: 'Ajax' },
    { src: 'src/assets/icons/grunt.svg', language: 'Grunt' },
    { src: 'src/assets/icons/css.png', language: 'CSS' },
    { src: 'src/assets/icons/js.png', language: 'JavaScript' },
    { src: 'src/assets/icons/html.png', language: 'HTML' },
]

const SkillsBackList: SkillProps[] = [
    { src: 'src/assets/icons/python.png', language: 'Python' },
    { src: 'src/assets/icons/mysql.png', language: 'MySql' },
    { src: 'src/assets/icons/django.svg', language: 'Django' },
    { src: 'https://via.placeholder.com/50x50', language: 'Rest Api' },
]

const Skills = () => {
    const allSkills = [...SkillsFrontList, ...SkillsBackList]

    return (
        <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsSubtitle>
                My hard skills in programming languages and frameworks
            </SkillsSubtitle>
            <SkillsGrid>
                {allSkills.map((skill, index) => (
                    <SkillCard key={index}>
                        <SkillImage src={skill.src} alt={skill.language} />
                        <SkillName>{skill.language}</SkillName>
                    </SkillCard>
                ))}
            </SkillsGrid>
        </SkillsContainer>
    )
}

export default Skills
