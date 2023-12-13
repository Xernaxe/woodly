'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { OurWorkSlideCard } from './OurWorkSlideCard';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';

export const OurWorkSlider = ({
	portfolioCards,
}: {
	portfolioCards: IPortfolioCard[];
}) => {

	const [emblaRef, emblaApi] = useEmblaCarousel();

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className='embla overflow-hidden w-full py-8'>
			<div className='embla__viewport relative' ref={emblaRef}>
				<div className='embla__container flex '>
					{portfolioCards.map((card, index) => {
						return <OurWorkSlideCard card={card} key={card._id} index={index}  arrLength={portfolioCards.length}/>;
					})}
				</div>
				<div className='hidden absolute bottom-[20%] w-full left-[10%] desktopL:left-[50%]  desktopL:-translate-x-1/2 desktopL:w-1/2 maxW desktop:flex gap-12 h-5'>
					<button className='embla__prev ' onClick={scrollPrev}>
						<Image
							src={'/arrow_left.svg'}
							loading='lazy'
							alt='Următoarea imagine'
							width={20}
							height={20}
						/>
					</button>
					<button className='embla__next ' onClick={scrollNext}>
						<Image
							src={'/arrow_right.svg'}
							loading='lazy'
							alt='Imaginea anterioară'
							width={20}
							height={20}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};
