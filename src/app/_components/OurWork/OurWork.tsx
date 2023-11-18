import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader/SectionHeader';
import { MainButton } from '../_globals/MainButton/MainButton';

export const OurWork = () => {
	return (
		<section className='section items-center bg-black '>
			<h3 className='uppercase text-xs font-light [letter-spacing:0.144rem] text-white'>
				Portofoliul nostru
			</h3>
			<SectionHeader
				className='text-white text-center'
				text='Descoperiți Ultimele Noastre Lucrari'
			/>
			<p className='text-white leading-relaxed font-light text-sm'>
				Explorează portofoliul nostru și lasă-te inspirat de proiectele noastre
				anterioare. Descoperă design-ul și execuția impecabilă care ne definesc,
				pentru a înțelege cum putem transforma și amenaja spațiul tău într-un
				loc unic și plin de stil.
			</p>

			<div className='flex justify-between gap-[clamp(.3rem,2vw,1rem)] mobile:gap-[clamp(.75rem,3vw,1rem)] w-full'>
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
