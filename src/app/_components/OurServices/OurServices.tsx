import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader/SectionHeader';
import Image from 'next/image';
import { HomeSectionTag } from '../_globals/HomeSectionTag/HomeSectionTag';

export const OurServices = () => {
	const cards = [
		{
			title: 'Consultanță în Design Interior',
			description:
				'Oferim consultanță pentru proiectele de design interior, inclusiv discuții despre concepte, selecția de culori, texturi și mobilier.',
			imgSrc: '/OurServices_1.png',
		},
		{
			title: 'Proiectare',
			description:
				'Designerii nostri sunt pregatiti sa ofere solutii inteligente pentru a crea un spatiu armonios si ergonomic in casa dumneavoastra.',
			imgSrc: '/OurServices_2.png',
		},
		{
			title: 'Masuratori',
			description:
				'Acordam o mare atentie masuratorilor la fata locului pentru ca mobilierul trebuie sa se potriveasca la milimetru.',
			imgSrc: '/OurServices_3.png',
		},
		{
			title: 'Instalare',
			description:
				'Coordonarea și gestionarea întregului proces de design și construcție pentru a asigura realizarea proiectului în mod eficient.',
			imgSrc: '/OurServices_4.png',
		},
	];
	return (
		<section className='section'>
      <HomeSectionTag text='Serviciile Noastre'/>
			<SectionHeader text='Servicii diverse de design interior' />
			<div className='flex flex-wrap gap-8'>
				{cards.map((card) => {
					return (
						<div className='relative h-[90vw]'>
							<div className='absolute top-0 left-0 w-full h-full'>
								<Image src={card.imgSrc} alt={card.title} fill />
							</div>
							<div className='relative p-4 text-white z-20 h-full flex flex-col justify-end gap-2'>
								<h4 className='text-inherit text-lg'>{card.title}</h4>
								<p className='text-inherit text-sm font-light leading-relaxed'>{card.description}</p>
							</div>
              <div className="absolute top-0 z-10 h-full w-full bg-[linear-gradient(0deg,_rgba(0,0,0,0.30)_0%,rgba(0,_0,_0,_0.30)_100%),linear-gradient(180deg,_rgba(0,0,0,0.00)_42%,#000_100%)]"></div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
