import React from 'react';
import Image from 'next/image';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';
import Link from 'next/link';

export const PortfolioCards = ({
	portfolioCards,
}: {
	portfolioCards: IPortfolioCard[];
}) => {
	const renderCard = (
		card: IPortfolioCard,
		index: number,
		arrLength: number
	) => {
		return (
			<Link
				aria-label={`Acceseaza pagina ${card.title}`}
				href={`/portofoliu/${card.slug}`}
				key={card._id}
				className='flex flex-col-reverse gap-4 tablet:flex-row tablet:justify-between tablet:items-center desktop:gap-6'
			>
				<div className='flex flex-col gap-3 tablet:w-10/12 desktop:w-7/12 desktop:gap-6 desktopL:w-5/12'>
					<div className='flex items-center gap-3'>
						<p className=' text-xs font-light uppercase letter-spacing text-black desktop:text-sm'>
							{index + 1 < 10 ? `0${index + 1}` : index + 1}
						</p>
						<span className=' h-[1px] w-10/12 bg-accentGreen'></span>
						<p className=' text-xs font-light uppercase letter-spacing text-black desktop:text-sm'>
							{arrLength < 10 ? `0${arrLength}` : arrLength}
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='text-black text-xl font-light tablet:text-2xl desktop:text-4xl'>
							{card.title}
						</h3>
						<p className='text-black text-sm font-light leading-loose tablet:leading-loose desktop:text-base desktop:leading-loose desktop:w-auto'>
							{card.desc}
						</p>
					</div>
					<div className='flex items-center gap-2 desktop:gap-4'>
						<span className=' h-[1px] w-2/12 bg-accentBlue desktop:w-8'></span>
						<p className=' text-xs uppercase letter-spacing font-semibold text-black'>
							Vezi proiectul
						</p>
					</div>
				</div>
				<div className='relative top-0 left-0 w-full max-w-[537px] aspect-square desktop:w-1/2'>
					<Image
						src={card.mainImg.imgSrc}
						alt={card.mainImg.imgAlt}
						fill
						priority={index === 0 ? true : false}
						sizes='(max-width:1024px) 100vw, (min-width:1440px) 537px, 50vw'
						className=' object-cover'
					/>
				</div>
			</Link>
		);
	};

	return (
		<section className='sectionM gap-20 desktop:gap-24'>
			{portfolioCards.map((card, index) =>
				renderCard(card, index, portfolioCards.length)
			)}
		</section>
	);
};
