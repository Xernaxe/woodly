import { SectionHeader } from '@/app/_components/_globals/SectionHeader/SectionHeader';
import React from 'react';

export const ServicesHero = () => {
	return (
		<section className='sectionP pt-20 relative bg-black'>
			<SectionHeader className='text-white text-center' text='Servicii' />
			<p className='text-white leading-relaxed font-light text-sm text-center'>
				Un mobilier de calitate trebuie însoțit întotdeauna de servicii de
				calitate. Din cunoștințele noastre, suntem singurii din piață care
				monitorizăm serviciile oferite pe toată durata colaborării cu clientul.
			</p>

            <span className='flex h-[1px] w-full bg-accentBlue mt-4'>
				<span className='h-[1px] w-2/3 bg-accentGreen m-auto'></span>
			</span>
		</section>
	);
};
