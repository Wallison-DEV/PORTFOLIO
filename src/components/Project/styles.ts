import styled from 'styled-components'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { SecondTitle } from '@/global'

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
}
export const Description = styled.p`
    font-size: 1rem;
    color: #555;
`

export const ItemDiv = styled(CarouselItem)`
    border: 2px solid #ccc;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    padding: 16px 16px 0;
    box-sizing: border-box;
    padding-bottom: 16px;
    >div{
        width: 100%;
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
    }
`

export const ProjectImgDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    img {
        width: 100%;
        object-fit: contain;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 8px 12px 8px rgba(0, 0, 0, 0.1);
    }
`

export const CenteredCarousel = styled(Carousel)`
    margin-top: 12px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${SecondTitle}{
        margin-bottom: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`
export const ProjectDate = styled.span`
    font-weight: 600;
    display: block;
`
export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    
    a{
        max-width: 700px;
    }
`
