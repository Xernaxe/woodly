import React from 'react';
import Image from 'next/image';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';

export const SingleImages = ({ images }: IPortfolioCard) => {
	return (
		<section className='sectionM desktopL:w-full '>
			<div className='flex flex-wrap justify-center gap-8 tablet:gap-[20px] tablet:grid tablet:grid-cols-2  '>
				{images.map((image, index) => {
					return (
						<div key={index} className='relative top-0 left-0 w-full max-w-[537px] desktop:max-w-none aspect-square '>
							<Image
								src={image.imgSrc}
								alt={image.imgAlt}
								fill
								className=' object-cover'
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};
