'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

export const WhoSlider = ({
	projectsImages
}: {
	projectsImages: {
		_id: string;
		slug: string;
		title: string;
		mainImg: { imgSrc: string; imgAlt: string };
	}[];
}) => {
	const [emblaRef] = useEmblaCarousel();
	return (
		<div className='embla overflow-hidden desktop:pt-6' ref={emblaRef}>
			<div className='embla__container flex gap-[20px] '>
				{projectsImages.map((card, index) => {
					return (
						<Link
							href={`/portofoliu/${card.slug}`}
							aria-label={`Accesează pagina ${card.title}`}
							key={card._id}
							className='embla__slide relative flex-[0_0_80%] max-w-[600px] max-h-[600px] min-w-0 aspect-square tablet:flex-[0_0_70%] desktop:flex-[0_0_50%] desktop:max-w-[537px]'
						>
							<Image
								src={card.mainImg.imgSrc}
								alt={card.mainImg.imgAlt}
								fill
								sizes='100vw'
								className=' object-cover'
								priority={index === 0 || index === 1 ? true : false}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
