import styled from 'styled-components'

export const breakpoints = {
	desktop: '1024px',
	tablet: '768px',
    smartphone: '420px',
    smartphone_short: '380px',
}

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;  
    padding: 0 40px 20px;
    max-width: 1024px;
    min-height: 100dvh;
    width: 100%;
    margin: auto;

    @media (max-width: ${breakpoints.desktop}) {
        max-width: 80vw;
        height: auto;
    }
    @media (max-width: ${breakpoints.tablet}) {
        margin: 80px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        margin-right:18px;
    }
    @media (max-width: ${breakpoints.smartphone}) {
        padding: 32px 16px;
        min-height: 100dvh;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: ${breakpoints.smartphone_short}) {
        padding: 48px 16px;
        margin: 0 auto;
        min-height: auto;
        justify-content: center;
        align-items: center;
    }
`

export const PrimaryText = styled.p`
    font-size: 1.25rem;
    line-height: 1.6;
    color: #555;
`

export const PrimaryTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
`

export const SecondTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #555;
    margin-bottom: 0.8rem;
`