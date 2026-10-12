import styled from 'styled-components'

export const breakpoints = {
	desktop: '1024px',
	tablet: '768px',
	smartphone: '460px',
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 96px 56px;
    max-width: 1180px;
    width: 100%;
    margin: auto;

    @media (max-width: ${breakpoints.desktop}) {
        padding: 80px 32px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        padding: 64px 20px;
    }
`

export const PrimaryText = styled.p`
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--text-muted);
`

export const PrimaryTitle = styled.h1`
    font-size: clamp(1.75rem, 3.2vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--text-heading);
    text-align: center;
    margin-bottom: 2.25rem;

    &::after {
        content: '';
        display: block;
        width: 48px;
        height: 4px;
        margin: 14px auto 0;
        border-radius: 999px;
        background: var(--accent);
    }
`

export const SecondTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 0.8rem;
`