'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export const WhoSlider = () => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='embla overflow-hidden desktop:pt-6' ref={emblaRef}>
			<div className='embla__container flex '>
				<div className='embla__slide relative flex-[0_0_80%] min-w-0 aspect-square mx-2 tablet:flex-[0_0_70%] desktop:flex-[0_0_60%]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
				<div className='embla__slide relative flex-[0_0_80%] min-w-0 aspect-square mx-2 tablet:flex-[0_0_70%] desktop:flex-[0_0_60%]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
				<div className='embla__slide relative flex-[0_0_80%] min-w-0 aspect-square mx-2 tablet:flex-[0_0_70%] desktop:flex-[0_0_60%]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>
		</div>
	);
};
