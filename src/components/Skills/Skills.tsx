import {
    SkillCard,
    SkillImage,
    SkillName,
    SkillsContainer,
    SkillsGrid,
    SkillsSubtitle,
    SkillsTitle,
} from './styles'

import ReactImg from '@/assets/icons/react.png'
import TsImg from '@/assets/icons/ts.png'
import SassImg from '@/assets/icons/sass.png'
import BootstrapImg from '@/assets/icons/bootstrap.png'
import AjaxImg from '@/assets/icons/ajax.png'
import GruntImg from '@/assets/icons/grunt.svg'
import CssImg from '@/assets/icons/css.png'
import JsImg from '@/assets/icons/js.png'
import HtmlImg from '@/assets/icons/html.png'
import VuejsImg from '@/assets/icons/vuejs.png'
import NextjsImg from '@/assets/icons/nextjs.png'
import PythonImg from '@/assets/icons/python.svg'
import MysqlImg from '@/assets/icons/mysql.png'
import DjangoImg from '@/assets/icons/django.svg'
import RestapiImg from '@/assets/icons/restapi.png'
import CppImg from '@/assets/icons/cpp.png'

type SkillProps = {
    src: string
    language: string
}

const SkillsFrontList: SkillProps[] = [
    { src: ReactImg, language: 'React' },
    { src: TsImg, language: 'TypeScript' },
    { src: SassImg, language: 'Sass' },
    { src: BootstrapImg, language: 'Bootstrap' },
    { src: AjaxImg, language: 'Ajax' },
    { src: GruntImg, language: 'Grunt' },
    { src: CssImg, language: 'CSS' },
    { src: JsImg, language: 'JavaScript' },
    { src: HtmlImg, language: 'HTML' },
    { src: VuejsImg, language: 'Vue.js' }, 
    { src: NextjsImg, language: 'Next.js' }, 
]

const SkillsBackList: SkillProps[] = [
    { src: PythonImg, language: 'Python' },
    { src: MysqlImg, language: 'MySql' },
    { src: DjangoImg, language: 'Django' },
    { src: RestapiImg, language: 'Rest Api' },
    { src: CppImg, language: 'C++' },
]

const Skills = () => {

    return (
        <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsSubtitle>
                My hard skills in programming languages and frameworks
            </SkillsSubtitle>
            <SkillsGrid>
                {SkillsFrontList.map((skill, index) => (
                    <SkillCard key={index}>
                        <SkillImage src={skill.src} alt={skill.language} />
                        <SkillName>{skill.language}</SkillName>
                    </SkillCard>
                ))}
            </SkillsGrid>
            <SkillsGrid>
                {SkillsBackList.map((skill, index) => (
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
