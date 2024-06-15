import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../global'

const slideInFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const slideInFromRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const GridContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.desktop}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.6s ease-out;

    &.animate {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideInFromLeft} 0.6s ease-out forwards;
    }
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
`

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    padding: 20px;
    cursor: pointer;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.6s ease-out;

    &:nth-child(1),
    &:nth-child(3) {
        transform: translateX(-100%);
    }

    &.animate {
        opacity: 1;
        transform: translateX(0);
        &:nth-child(1),
        &:nth-child(3) {
            animation: ${slideInFromLeft} 0.6s ease-out forwards;
        }

        &:nth-child(2),
        &:nth-child(4) {
            animation: ${slideInFromRight} 0.6s ease-out forwards;
        }
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: scale(1.05); 
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconWrapper = styled.div`
    color: #007bff;
    font-size: 1.5rem;
    margin-bottom: 10px;
`

export const CardText = styled.div`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    span {
        display: block;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.6s ease-out;

    @media (max-width: ${breakpoints.desktop}) {
        display: none;
    }

    &.animate {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideInFromRight} 0.6s ease-out forwards;
    }
`

export const AboutImg = styled.img`
    width: 200px;
    height: 200px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;

    &:hover{
        transition: all 0.3 ease-in-out;
        transform: scale(1.1);
    }
`    