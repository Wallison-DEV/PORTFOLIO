import { styled } from 'styled-components';
import { Container } from '../../global';

export const StyledHeroContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (min-width: 768px) {
        grid-template-columns: 5fr 7fr;
    }
`;

export const StyledImg = styled.img`
    width: 75%;
    max-width: 300px;
    height: auto;
    border-radius: 50%;
    margin: auto;
    display: block;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledH2 = styled.h2`
    color: #333;
    font-weight: bold;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

export const StyledTypicalText = styled.div`
    padding-left: 2rem;
    text-align: center;
    font-size: 1.75rem;
    min-height: 8rem;

    @media (min-width: 768px) {
        padding-left: 0;
    }
`;

export const StyledButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    padding-bottom: 1rem;
`;

export const StyledIcon = styled.div`
    color: #007bff;
`;

export const StyledButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    padding: 8px;
    background-color: #007bff;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease; 

    p {
        color: inherit;
    }

    ${StyledIcon} {
        color: white;
    }

    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;

export const StyledSocialLinks = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0.75rem;

    a {
        margin-right: 1rem;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.3);
        }
    }
`;
