import { SectionHeader } from '@/app/_components/_globals/SectionHeader';
import React from 'react';
import Image from 'next/image';
import { HeroImage } from '@/app/_components/_globals/HeroImage';

export const SingleHero = () => {
	return (
		<section className='flex flex-col pt-20 relative bg-black desktop:pt-40 desktop:pb-0 '>
			<div className='paddingsX m-auto mb-5 desktop:mb-10 desktop:w-10/12 desktopL:maxW desktopL:p-0 desktopL:w-auto desktopL:px-[8%]'>
				<div className='flex items-center justify-center gap-3'>
					<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
						01
					</p>
					<span className=' h-[1px] w-3/12 bg-accentGreen'></span>
					<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
						02
					</p>
				</div>
				<SectionHeader
					className='text-white text-center desktop:text-4xl'
					text='Great view apartment'
				/>
				<p className='text-white leading-relaxed font-light text-sm text-center tablet:text-base'>
					Apartamentul cu priveliște spectaculoasă. Un spațiu luminos și modern,
					ideal pentru a vă bucura de panorame uimitoare și momente de relaxare.
				</p>
			</div>

			<HeroImage>
				<div className='relative w-full aspect-square tablet:aspect-video '>
					<Image
						src={'/about_1.png'}
						alt={'@TODO: Change'}
						fill
						className=' object-cover'
					/>
				</div>
			</HeroImage>
		</section>
	);
};
