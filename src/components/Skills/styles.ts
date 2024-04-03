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
    padding-bottom: 1rem;
`

export const SkillsSubtitle = styled.h6`
    font-size: 2rem;
    padding-bottom: 2rem;
`

export const SkillsGrid = styled.div`
    display: flex;
    width: 100%;
    max-with: 520px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 1rem;
    @media (max-width: ${breakpoints.tablet}) {
        display: grid;
        max-width: auto;
        grid-template-columns: repeat(2, 1fr); 
    }
`

export const SkillCard = styled.div`
    width: calc(100% / 7);
    text-align: center; 
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${breakpoints.tablet}) {
        width: auto;
    }
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
