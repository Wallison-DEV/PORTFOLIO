import styled, { keyframes } from 'styled-components'
import { breakpoints, PrimaryTitle } from '../../global'

export const slideInFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const slideInFromRight = keyframes`
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
    gap: 16px;
    margin-top: 28px;

    @media (max-width: 460px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    padding: 20px 16px;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.25s ease, border-color 0.25s ease;

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
        box-shadow: var(--shadow-md);
        border-color: var(--border-strong);
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: var(--accent-soft);
    color: var(--accent);
    margin-bottom: 12px;

    svg {
        width: 28px;
        height: 28px;
    }
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
    width: 220px;
    height: 220px;
    max-width: 100%;
    border-radius: 50%;
    border: 4px solid var(--accent-soft);
    box-shadow: var(--shadow-md);
    background: var(--surface);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

export const AboutTitle = styled(PrimaryTitle)`
    text-align: left;

    &::after {
        margin-left: 0;
    }
`
