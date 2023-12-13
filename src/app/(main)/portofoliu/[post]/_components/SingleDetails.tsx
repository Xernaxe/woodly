import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';
import React from 'react';

export const SingleDetails = ({
	receptionDate,
	location,
	style,
	surface,
}: IPortfolioCard) => {
	return (
		<section className='sectionM mb-0 desktopL:w-full'>
			<div className='flex flex-col gap-3 tablet:gap-12'>
				<div className='flex items-center gap-3 tablet:gap-6'>
					<h2 className='min-w-fit uppercase text-sm font-light leading-snug [letter-spacing:0.144rem]'>
						Project Details
					</h2>
					<span className='flex justify-center h-[1px] w-full bg-accentBlue'>
						<span className='h-[1px] w-2/3 bg-accentGreen'></span>
					</span>
				</div>
				<div className='flex flex-row flex-wrap gap-y-2 justify-between'>
					<div className='flex flex-col basis-1/2 tablet:basis-auto'>
						<h3 className='text-textGrey'>Data</h3>
						<p className='font-light text-2xl tablet:text-xl desktop:text-2xl'>
							{receptionDate}
						</p>
					</div>
					<div className='flex flex-col basis-1/2 tablet:basis-auto'>
						<h3 className='text-textGrey'>Locatie</h3>
						<p className='font-light text-2xl tablet:text-xl desktop:text-2xl'>
							{location}
						</p>
					</div>
					<div className='flex flex-col basis-1/2 tablet:basis-auto'>
						<h3 className='text-textGrey'>Stil</h3>
						<p className='font-light text-2xl tablet:text-xl desktop:text-2xl'>
							{style}
						</p>
					</div>
					<div className='flex flex-col basis-1/2 tablet:basis-auto'>
						<h3 className='text-textGrey'>Suprafata</h3>
						<p className='font-light text-2xl tablet:text-xl desktop:text-2xl'>
							{surface} m2
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
