'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { OurWorkSlideCard } from './OurWorkSlideCard';

export const OurWorkSlider = () => {
	const workSlides = ['@TOOD', '@TOOD', '@TOOD'];

	const [emblaRef, emblaApi] = useEmblaCarousel();

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		// @TODO:break into reusable components asapppppppppppppppppppppp
		<div className='embla overflow-hidden w-full py-8'>
			<div className='embla__viewport relative' ref={emblaRef}>
				<div className='embla__container flex '>
					{workSlides.map((slide, index) => {
						return <OurWorkSlideCard key={index} />;
					})}
				</div>
				<div className='hidden absolute bottom-[20%] left-[20%] desktop:flex gap-12 h-5'>
					<button className='embla__prev ' onClick={scrollPrev}>
						<Image src={'/arrow_left.svg'} alt='prev' width={20} height={20} />
					</button>
					<button className='embla__next ' onClick={scrollNext}>
						<Image src={'/arrow_right.svg'} alt='next' width={20} height={20} />
					</button>
				</div>
			</div>
		</div>
	);
};
