'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export const WhoSlider = () => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='embla overflow-hidden desktop:pt-6' ref={emblaRef}>
			<div className='embla__container flex gap-[20px] '>
				<div className='embla__slide relative flex-[0_0_80%] max-w-[600px] max-h-[600px] min-w-0 aspect-square tablet:flex-[0_0_70%] desktop:flex-[0_0_50%] desktop:max-w-[537px]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						sizes='100vw'
						className='object-cover'
					/>
				</div>
				<div className='embla__slide relative flex-[0_0_80%] max-w-[600px] max-h-[600px] min-w-0 aspect-square tablet:flex-[0_0_70%] desktop:flex-[0_0_50%] desktop:max-w-[537px]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						sizes='100vw'
						className='object-cover'
					/>
				</div>
				<div className='embla__slide relative flex-[0_0_80%] max-w-[600px] max-h-[600px] min-w-0 aspect-square tablet:flex-[0_0_70%] desktop:flex-[0_0_50%] desktop:max-w-[537px]'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						sizes='100vw'
						className='object-cover'
					/>
				</div>
			</div>
		</div>
	);
};
