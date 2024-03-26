import styled from 'styled-components'
import { breakpoints } from '../Project/styles'

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding: 10px;
    text-align: center;
`

export const SkillsTitle = styled.h2`
    font-weight: bold;
    font-size: 2.5rem;
    padding-bottom: 2rem;
`

export const SkillsSubtitle = styled.h6`
    font-size: 2rem;
    padding-bottom: 6rem;
`

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }
`

export const SkillCard = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SkillImage = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 10px;
`

export const SkillName = styled.h6`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`
