import Image from 'next/image';
import React from 'react';
import { MainButton } from '../_globals/MainButton/MainButton';

export const Hero = () => {
	return (
		<section className='sectionP max-desktop:pt-20 relative desktop:pt-32 desktop:h-screen desktop:justify-center'>
			<div className='relative tablet:ml-10 tablet:w-[65%] tablet:before:w-[1px] tablet:before:h-full tablet:before:bg-accentBlue tablet:before:flex tablet:before:absolute tablet:before:left-0 tablet:before:-translate-x-10 desktop:ml-20 desktop:w-1/2'>
				<div className=' flex items-center gap-2'>
					<p className='text-white font-light uppercase text-xs min-w-max tablet:letter-spacing'>
						Firma de amenajari interioare
					</p>
					<span className='block h-[1px] w-full bg-accentGreen'></span>
				</div>

				<div className='flex flex-col gap-3 my-4 tablet:my-10 tablet:gap-4 desktop:gap-6'>
					<h1 className='text-white font-light text-2xl leading-snug desktopL:text-5xl mobile:text-[clamp(1.5rem,4.5vw,3rem)] desktop:text-5xl'>
						Amenajam locuri in care fiecare detaliu te inspira.
					</h1>
					<p className='text-white font-light text-xs leading-relaxed mobile:text-[clamp(.75rem,2.5vw,1rem)] '>
						Bun venit la Woodly, locul unde arta se întalneste cu
						functionalitatea intr-o simfonie de lux si stil. Suntem aici sa
						facem realitate din visul tau, transformand fiecare spatiu într-un
						basm, unde rafinamentul se îmbină cu confortul.
					</p>
				</div>

				<div className='flex justify-between gap-[clamp(.3rem,2vw,1rem)] mobile:gap-[clamp(.75rem,3vw,1rem)] mobileLarge:w-max '>
					<MainButton
						href='/contact'
						text='Contacteaza-ne'
						className='bg-white max-[330px]:text-[0.7rem] mobileLarge:w-max'
					/>
					<MainButton
						href='/'
						text='Vezi Portofoliul'
						className='text-white max-[330px]:text-[0.7rem] mobileLarge:w-max'
					/>
				</div>
			</div>

			<div className='absolute -z-10 top-0 left-0 h-full'>
				<Image
					className='object-cover max-w-screen h-full desktop:w-screen desktop:h-screen'
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
