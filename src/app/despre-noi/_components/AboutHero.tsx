import { SectionHeader } from '@/app/_components/_globals/SectionHeader';
import React from 'react';
import Image from 'next/image';
import { HeroImage } from '@/app/_components/_globals/HeroImage';

export const AboutHero = () => {
	return (
		<section className='flex flex-col pt-20 relative bg-black desktop:pt-40 desktop:pb-0 '>
			<div className='paddingsX m-auto mb-5 desktop:mb-10 desktop:w-10/12 desktopL:maxW desktopL:p-0 desktopL:w-auto desktopL:px-[8%]'>
				<h3 className='uppercase text-xs text-center font-light [letter-spacing:0.144rem] text-white desktop:mb-4'>
					Despre Noi
				</h3>
				<SectionHeader
					className='text-white text-center desktop:text-4xl'
					text='Suntem condusi de pasiunea de a crea design interior care face diferenta'
				/>
				<p className='text-white leading-relaxed font-light text-sm text-center tablet:text-base'>
					Misiunea noastră este să facem diferența prin design interior creativ
					și autentic, construind locuințe și spații care vă definesc
					autenticitatea. Suntem dedicați să vă ajutăm să vă atingeți
					potențialul și să vă bucurați de un mediu care inspiră.
				</p>
			</div>

			<HeroImage>
				<div className='relative  w-full aspect-square max-w-[537px]'>
					<Image src={'/about_1.png'} alt={'@TODO: Change'} fill />
				</div>
				<div className='hidden relative  w-full h-full aspect-square max-w-[537px] desktop:block'>
					<Image src={'/about_2.png'} alt={'@TODO: Change'} fill />
				</div>
			</HeroImage>
		</section>
	);
};
