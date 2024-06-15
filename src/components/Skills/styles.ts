import styled from 'styled-components'

export const SkillsGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
`

export const SkillCard = styled.div`
    text-align: center;
    padding: 8px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const SkillName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
`

export const SkillImageDiv = styled.div`
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 12px;
    margin-bottom: 10px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
