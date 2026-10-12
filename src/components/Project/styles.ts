import styled from 'styled-components'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { SecondTitle, breakpoints } from '@/global'

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-muted);
`

export const ItemDiv = styled(CarouselItem)`
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 28px;
    box-sizing: border-box;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: var(--shadow-md);

    > div {
        width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
        padding: 18px;
    }
`

export const ProjectImgDiv = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border: 1px solid var(--border);
        border-radius: 14px;
        box-shadow: var(--shadow-sm);
        background: var(--surface-2);
    }
`

export const CenteredCarousel = styled(Carousel)`
    user-select: none;
    margin-top: 12px;

    &:active {
        cursor: grabbing;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-top: 44px;
        margin-bottom: 20px;
    }
`

export const Content = styled(CarouselContent)`
    margin-left: 0px;
`

export const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    ${SecondTitle} {
        margin-bottom: 0;
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--text-strong);
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`

export const ProjectDate = styled.span`
    display: inline-block;
    margin-top: 8px;
    padding: 3px 12px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
`

export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 28px;
`