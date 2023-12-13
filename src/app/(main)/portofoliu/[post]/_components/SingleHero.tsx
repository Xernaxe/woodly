import { SectionHeader } from '@/app/(main)/_components/_globals/SectionHeader';
import React from 'react';
import Image from 'next/image';
import { HeroImage } from '@/app/(main)/_components/_globals/HeroImage';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';

export const SingleHero = ({ title, desc, mainImg }: IPortfolioCard) => {
	return (
		<section className='flex flex-col pt-20 relative bg-black desktop:pt-40 desktop:pb-0 '>
			<div className='paddingsX m-auto mb-5 desktop:mb-10 desktop:w-10/12 desktopL:maxW desktopL:p-0 desktopL:w-auto desktopL:px-[8%]'>
				{/* <div className='flex items-center justify-center gap-3'>
					<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
						01
					</p>
					<span className=' h-[1px] w-3/12 bg-accentGreen'></span>
					<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
						02
					</p>
				</div> */}
				<SectionHeader
					className='text-white text-center desktop:text-4xl'
					text={title}
				/>
				<p className='text-white leading-relaxed font-light text-sm text-center tablet:text-base'>
					{desc}
				</p>
			</div>

			<HeroImage>
				<div className='relative w-full aspect-square tablet:aspect-video '>
					<Image
						src={mainImg.imgSrc}
						alt={mainImg.imgAlt}
						fill
						priority
						className=' object-cover'
					/>
				</div>
			</HeroImage>
		</section>
	);
};
