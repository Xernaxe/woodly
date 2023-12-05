import React from 'react';

export const Stats = () => {
	const statsCards = [
		{ title: 'Clienti multumiti', stat: '100+' },
		{ title: 'Ani de experienta', stat: '15+' },
		{ title: 'Rezultat dorit', stat: '100%' },
		{ title: 'Rata de satisfactie', stat: '99%' },
	];
	return (
		<section className='sectionM items-center gap-6 tablet:flex-row tablet:justify-evenly desktop:mt-32'>
			{statsCards.map((card) => {
				return (
					<div className='flex flex-col items-center' key={card.title}>
						<h3 className=' text-7xl text-white [text-shadow:0px_0px_6px_black] tablet:text-5xl desktop:text-7xl'>{card.stat}</h3>
						<p>{card.title}</p>
					</div>
				);
			})}
		</section>
	);
};
