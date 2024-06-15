import styled from 'styled-components'
import { breakpoints } from '../../global'

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
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
    @media (max-width: ${breakpoints.tablet}) {
        display: grid;
        max-width: auto;
        grid-template-columns: repeat(2, 1fr); 
    }
`

export const SkillCard = styled.div`
    text-align: center; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;  
    &:hover {
        transform: scale(1.1); 
    }
`
export const SkillName = styled.h6`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export const SkillImageDiv = styled.div`
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 12px;
    margin-bottom: 10px;

    img{
        height: 90%;
        object-fit: contain;
    }
`