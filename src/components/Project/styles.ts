import styled from 'styled-components'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
}

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;  
    padding: 80px 0;
    max-width: 1024px;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    max-height: 900px;

    @media (max-width: ${breakpoints.tablet}) {
        margin: 80px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        margin-right:18px;
    }
    @media (max-width: ${breakpoints.desktop}) {
        max-width: 80vw;
        height: auto;
    }
`

export const ItemDiv = styled(CarouselItem)`
    border: 2px solid #ccc;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    padding: 16px 16px 0;
    box-sizing: border-box;
    padding-bottom: 16px;
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 16px;
    object-fit: contain;
`

export const CenteredCarousel = styled(Carousel)`
    @media (max-width: ${breakpoints.tablet}) {
        width: 75vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        img {
            padding: 0 0 16px;
        }
    }
`

export const Content = styled(CarouselContent)`
    margin-left: 0px;
`

export const DetailsDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`
