import styled from 'styled-components'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { breakpoints } from '@/global'

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
