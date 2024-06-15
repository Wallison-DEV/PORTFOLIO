import styled from 'styled-components';
import { breakpoints } from '../../global';

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
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
`;

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    padding: 20px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconWrapper = styled.div`
    color: #007bff;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const CardText = styled.div`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    span {
        display: block;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.desktop}) {
        display: none;
    }
`;

export const AboutImg = styled.img`
    width: 200px;
    height: 200px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
`;

