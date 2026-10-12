import * as React from 'react'

import useEmblaCarousel, {

	type UseEmblaCarouselType,

} from 'embla-carousel-react'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import styled from 'styled-components'







type CarouselApi = UseEmblaCarouselType[1]

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>

type CarouselOptions = UseCarouselParameters[0]

type CarouselPlugin = UseCarouselParameters[1]



type CarouselProps = {

	opts?: CarouselOptions

	plugins?: CarouselPlugin

	orientation?: 'horizontal' | 'vertical'

	setApi?: (api: CarouselApi) => void

}



type CarouselContextProps = {

	carouselRef: ReturnType<typeof useEmblaCarousel>[0]

	api: ReturnType<typeof useEmblaCarousel>[1]

	scrollPrev: () => void

	scrollNext: () => void

	canScrollPrev: boolean

	canScrollNext: boolean

} & CarouselProps



const CarouselContext = React.createContext<CarouselContextProps | null>(null)



function useCarousel() {

	const context = React.useContext(CarouselContext)



	if (!context) {

		throw new Error('useCarousel must be used within a <Carousel />')

	}



	return context

}



const Carousel = React.forwardRef<

	HTMLDivElement,

	React.HTMLAttributes<HTMLDivElement> & CarouselProps

>(

	(

		{

			orientation = 'horizontal',

			opts,

			setApi,

			plugins,

			className,

			children,

			...props

		},

		ref

	) => {

		const [carouselRef, api] = useEmblaCarousel(

			{

				...opts,

				axis: orientation === 'horizontal' ? 'x' : 'y',

			},

			plugins

		)

		const [canScrollPrev, setCanScrollPrev] = React.useState(false)

		const [canScrollNext, setCanScrollNext] = React.useState(false)



		const onSelect = React.useCallback((api: CarouselApi) => {

			if (!api) {

				return

			}



			setCanScrollPrev(api.canScrollPrev())

			setCanScrollNext(api.canScrollNext())

		}, [])



		const scrollPrev = React.useCallback(() => {

			api?.scrollPrev()

		}, [api])



		const scrollNext = React.useCallback(() => {

			api?.scrollNext()

		}, [api])



		const handleKeyDown = React.useCallback(

			(event: React.KeyboardEvent<HTMLDivElement>) => {

				if (event.key === 'ArrowLeft') {

					event.preventDefault()

					scrollPrev()

				} else if (event.key === 'ArrowRight') {

					event.preventDefault()

					scrollNext()

				}

			},

			[scrollPrev, scrollNext]

		)



		React.useEffect(() => {

			if (!api || !setApi) {

				return

			}



			setApi(api)

		}, [api, setApi])



		React.useEffect(() => {

			if (!api) {

				return

			}



			onSelect(api)

			api.on('reInit', onSelect)

			api.on('select', onSelect)



			return () => {

				api?.off('select', onSelect)

			}

		}, [api, onSelect])



		return (

			<CarouselContext.Provider

				value={{

					carouselRef,

					api: api,

					opts,

					orientation:

						orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),

					scrollPrev,

					scrollNext,

					canScrollPrev,

					canScrollNext,

				}}

			>

				<div

					ref={ref}

					onKeyDownCapture={handleKeyDown}

					className={className}
					style={{ position: 'relative' }}

					role="region"

					aria-roledescription="carousel"

					{...props}

				>

					{children}

				</div>

			</CarouselContext.Provider>

		)

	}

)

Carousel.displayName = 'Carousel'




const Viewport = styled.div`
	overflow: hidden;
`

const Track = styled.div<{ $vertical: boolean }>`
	display: flex;
	${({ $vertical }) =>
		$vertical ? 'margin-top: -1rem; flex-direction: column;' : 'margin-left: -1rem;'}
`

const Slide = styled.div<{ $vertical: boolean }>`
	min-width: 0;
	flex: 0 0 100%;
	${({ $vertical }) => ($vertical ? 'padding-top: 1rem;' : 'padding-left: 1rem;')}
`

const NavButton = styled.button<{ $vertical: boolean; $side: 'start' | 'end' }>`
	position: absolute;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	padding: 0;
	border-radius: 9999px;
	border: 1px solid var(--border-strong);
	background: var(--surface);
	color: inherit;
	cursor: pointer;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	transition: background-color 0.2s;
	${({ $vertical, $side }) =>
		$vertical
			? `${$side === 'start' ? 'top: -3rem;' : 'bottom: -3rem;'} left: 50%; transform: translateX(-50%) rotate(90deg);`
			: `${$side === 'start' ? 'left: -3rem;' : 'right: -3rem;'} top: 50%; transform: translateY(-50%);`}

		@media (max-width: 768px) {
		${({ $vertical, $side }) =>
			$vertical
				? ''
				: `top: -2.75rem; left: auto; transform: none; ${$side === 'start' ? 'right: 3rem;' : 'right: 0.5rem;'}`}
	}

	&:hover:not(:disabled) {
		background: var(--surface-2);
	}
	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
	svg {
		width: 1rem;
		height: 1rem;
	}
`

const SrOnly = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`

const CarouselContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		<Viewport ref={carouselRef}>
			<Track ref={ref} $vertical={orientation === 'vertical'} {...props} />
		</Viewport>
	)
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
	const { orientation } = useCarousel()

	return (
		<Slide
			ref={ref}
			role="group"
			aria-roledescription="slide"
			$vertical={orientation === 'vertical'}
			{...props}
		/>
	)
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel()

	return (
		<NavButton
			ref={ref}
			type="button"
			$vertical={orientation === 'vertical'}
			$side="start"
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<ArrowLeft />
			<SrOnly>Previous slide</SrOnly>
		</NavButton>
	)
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel()

	return (
		<NavButton
			ref={ref}
			type="button"
			$vertical={orientation === 'vertical'}
			$side="end"
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<ArrowRight />
			<SrOnly>Next slide</SrOnly>
		</NavButton>
	)
})
CarouselNext.displayName = 'CarouselNext'

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
}
