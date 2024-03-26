import styled from 'styled-components'
import { breakpoints } from '../Project/styles'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 10px;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 24px;
    }
`

export const AboutTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
`

export const AboutText = styled.p`
    font-size: 1.5rem;
    padding-bottom: 1rem;
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: center;
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    background-color: #f3f4f6;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CardText = styled.p`
    font-weight: bold;
`

export const AboutImg = styled.img`
    width: 100%;
    max-width: 100%;
    border-radius: 50%;
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`
