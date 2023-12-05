import { SectionHeader } from '@/app/_components/_globals/SectionHeader/SectionHeader';
import React from 'react';

export const PortfolioHero = () => {
	return (
		<section className='sectionP max-w-none pt-20 relative bg-black desktop:pt-40'>
			<div className='desktop:m-auto desktop:w-8/12'>
				<SectionHeader className='text-white text-center' text='Portofoliu' />
				<p className='text-white leading-relaxed font-light text-sm text-center desktop:text-base desktop:w-10/12 m-auto'>
					Descoperă modul în care pasiunea noastră se traduce în fiecare detaliu
					și cum aducem la viață idei inspirate pentru un design interior
					captivant și distinctiv.
				</p>

				<span className='flex h-[1px] w-full bg-accentBlue mt-4 desktop:mt-16'>
					<span className='h-[1px] w-2/3 bg-accentGreen m-auto'></span>
				</span>
			</div>
		</section>
	);
};
