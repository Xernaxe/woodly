import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader/SectionHeader';
import { MainButton } from '../_globals/MainButton/MainButton';
import { OurWorkSlider } from './OurWorkSlider/OurWorkSlider';

export const OurWork = () => {
	return (
		<section className='paddingsY flex flex-col items-center bg-black '>
			<h3 className='paddingsX uppercase text-xs font-light [letter-spacing:0.144rem] text-white'>
				Portofoliul nostru
			</h3>
			<SectionHeader
				className='text-white text-center desktop:pt-12'
				text='Descoperiți Ultimele Noastre Lucrari'
			/>
			<p className='paddingsX text-white leading-relaxed font-light text-sm desktop:leading-loose desktop:w-9/12 desktop:px-0 desktopL:w-[52%]'>
				Explorează portofoliul nostru și lasă-te inspirat de proiectele noastre
				anterioare. Descoperă design-ul și execuția impecabilă care ne definesc,
				pentru a înțelege cum putem transforma și amenaja spațiul tău într-un
				loc unic și plin de stil.
			</p>

			<OurWorkSlider/>

			<div className='paddingsX flex justify-between w-full gap-[clamp(.3rem,2vw,1rem)] mobile:gap-[clamp(.75rem,3vw,1rem)] tablet:justify-center desktop:pt-3'>
				<MainButton
					href='/contact'
					text='Contacteaza-ne'
					className='bg-white max-[330px]:text-[0.7rem]'
				/>
				<MainButton
					href='/'
					text='Vezi Portofoliul'
					className='text-white max-[330px]:text-[0.7rem]'
				/>
			</div>
		</section>
	);
};
