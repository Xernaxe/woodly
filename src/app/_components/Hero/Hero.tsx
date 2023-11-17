import Image from 'next/image';
import React from 'react';
import { MainButton } from '../_globals/MainButton/MainButton';
import { HomeSectionTag } from '../_globals/HomeSectionTag/HomeSectionTag';

export const Hero = () => {
	return (
		<section className='section pt-20 relative'>
			<div className=' flex items-center gap-2'>
				<p className='text-white font-light uppercase text-xs min-w-max mobile:text-[clamp(.75rem,3.2vw,1rem)]'>
					Firma de amenajari interioare
				</p>
				<span className='block h-[1px] w-full bg-accentGreen'></span>
			</div>

			<div className='flex flex-col gap-3 my-4'>
				<h1 className='text-white font-light text-2xl leading-snug desktopL:text-5xl mobile:text-[clamp(1.5rem,5.8vw,3rem)]'>
					Amenajam locuri in care fiecare detaliu te inspira.
				</h1>
				<p className='text-white font-light text-xs leading-relaxed mobile:text-[clamp(.75rem,3.2vw,1rem)]'>
					Bun venit la Woodly, locul unde arta se întalneste cu functionalitatea
					intr-o simfonie de lux si stil. Suntem aici sa facem realitate din
					visul tau, transformand fiecare spatiu într-un basm, unde rafinamentul
					se îmbină cu confortul.
				</p>
			</div>

			<div className="flex justify-between gap-[clamp(.3rem,2vw,1rem)] mobile:gap-[clamp(.75rem,3vw,1rem)]">
				<MainButton href='/contact' text='Contacteaza-ne' className='bg-white max-[330px]:text-[0.7rem]'/>
				<MainButton href='/' text='Vezi Portofoliul' className='text-white max-[330px]:text-[0.7rem]'/>
			</div>

			<div className='absolute -z-10 top-0 left-0 h-full'>
				<Image
					className='object-cover max-w-screen h-full'
					src={'/heroImg.png'}
					width={1440}
					height={1080}
					alt='Hero Image'
					priority={true}
				/>
			</div>

		</section>
	);
};
