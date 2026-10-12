import styled from 'styled-components'

export const Subtitle = styled.p`
    max-width: 640px;
    margin: -1rem auto 2rem;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--text-muted);
    text-align: center;
`

export const GroupLabel = styled.h3`
    margin: 2rem 0 0.25rem;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    text-align: center;
`

export const SkillsGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

export const SkillCard = styled.div`
    text-align: center;
    padding: 4px;
    transition: transform 0.25s ease;
    &:hover {
        transform: translateY(-4px);
    }
`

export const SkillName = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text);
    margin-top: 0.25rem;
`

export const SkillImageDiv = styled.div`
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: var(--shadow-sm);
    padding: 18px;
    margin-bottom: 8px;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;

    ${SkillCard}:hover & {
        border-color: var(--accent);
        box-shadow: var(--shadow-md);
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    :root[data-theme='dark'] & img[alt='Next.js'],
    :root[data-theme='dark'] & img[alt='Rest Api'] {
        filter: invert(1);
    }
`