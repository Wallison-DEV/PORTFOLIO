import { styled } from "styled-components";
import { Container } from '../Project/styles';

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

export const StyledButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s ease;

    ${StyledIcon}{
        color: white;
    }
    &:hover {
        background-color: #0056b3;
    }
`;

export const StyledLink = styled.a`
    color: inherit;
`;


export const StyledSocialLinks = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0.75rem;

    a {
        margin-right: 1rem;
    }
`;