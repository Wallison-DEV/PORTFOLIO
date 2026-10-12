import { styled } from 'styled-components';
import { Container } from '../../global';

export const StyledHeroContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    padding-top: 112px;
`;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: 5fr 7fr;
        gap: 4rem;
    }
`;

export const StyledImgWrap = styled.div`
    position: relative;
    width: 75%;
    max-width: 320px;
    margin: auto;

    &::before {
        content: '';
        position: absolute;
        inset: -14px;
        border-radius: 50%;
        background: conic-gradient(from 180deg, var(--accent), transparent 40%, var(--accent) 100%);
        opacity: 0.35;
        filter: blur(18px);
        z-index: 0;
    }
`;

export const StyledImg = styled.img`
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    border-radius: 50%;
    display: block;
    border: 4px solid var(--surface);
    box-shadow: var(--shadow-md);
    background: var(--surface);
`;

export const StyledText = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export const StyledEyebrow = styled.span`
    display: inline-block;
    padding: 6px 14px;
    margin-bottom: 1rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.02em;
`;

export const StyledH2 = styled.h2`
    font-weight: 800;
    font-size: clamp(2.25rem, 5.4vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 0.75rem;
    color: var(--text-strong);
    background: linear-gradient(90deg, var(--text-strong) 30%, var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const StyledTypicalText = styled.div`
    font-size: clamp(1.1rem, 2.2vw, 1.6rem);
    font-weight: 600;
    color: var(--accent);
    min-height: 2.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1.5rem;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const StyledIcon = styled.div`
    display: flex;
    color: var(--accent);
`;

export const StyledButton = styled.a<{ $secondary?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 22px;
    font: inherit;
    font-weight: 600;
    font-size: 0.975rem;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid ${({ $secondary }) => ($secondary ? 'var(--border-strong)' : 'transparent')};
    background-color: ${({ $secondary }) => ($secondary ? 'var(--surface)' : 'var(--btn-bg)')};
    color: ${({ $secondary }) => ($secondary ? 'var(--text-strong)' : '#fff')};
    box-shadow: ${({ $secondary }) => ($secondary ? 'var(--shadow-sm)' : '0 6px 18px rgba(79, 70, 229, 0.28)')};
    transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    p {
        color: inherit;
        margin: 0;
    }

    ${StyledIcon} {
        color: ${({ $secondary }) => ($secondary ? 'var(--accent)' : '#fff')};
    }

    &:hover {
        background-color: ${({ $secondary }) => ($secondary ? 'var(--surface-2)' : 'var(--btn-hover)')};
        border-color: ${({ $secondary }) => ($secondary ? 'var(--accent)' : 'transparent')};
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }
`;

export const StyledSocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.5rem;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid var(--border-strong);
        background: var(--surface);
        color: var(--text-muted);
        transition: all 0.2s ease;

        ${StyledIcon} {
            color: inherit;
        }

        &:hover {
            color: var(--accent);
            border-color: var(--accent);
            transform: translateY(-3px);
        }
    }
`;