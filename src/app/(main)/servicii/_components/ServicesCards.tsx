import React from 'react';
import Image from 'next/image';
import { IServicesCard } from '@/app/(main)/_types/IServicesCard';

export const ServicesCards = () => {
	const cards: IServicesCard[] = [
		{
			title: 'Consultanță',
			contents: {
				desc: [
					'Echipa noastră oferă consultanță în alegerea designului în funcție de nevoile și gusturile dumneavoastră. Deoarece casa este unul dintre cele mai dragi locuri, trebuie să stabilim împreună aspectele care țin de funcționalitatea și aspectul acesteia. Realizarea unui proiect adecvat necesită în primul rând un consultant cu experiență și cu bune abilități de comunicare. Pentru reușita proiectului, este de asemenea necesară determinarea compromisului ideal dintre:',
				],
				checks: [
					'Nevoile estetice',
					'Cerințele de depozitare',
					'Constrângerile tehnice.',
					'Reguli de ergonomie',
					'Forma spațiului',
					'Buget',
				],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_1.png',
			id: 1,
		},
		{
			title: 'Proiectare',
			contents: {
				desc: [
					'Designerii noștri sunt pregătiți să ofere soluții inteligente pentru a crea un spațiu armonios și ergonomic în casa dumneavoastră. Schița se face asistată de calculator, în timp real. Veți vedea în 3D mobilierul dumneavoastră înainte de a-l comanda. Tot ce aveți de făcut este să aduceți o schiță a spațiului în care să fie figurate dimensiunile încăperii, poziționarea ușilor, ferestrelor și a racordurilor la utilități. Pentru ca cerințele să fie reflectate în configuratia finală a mobilierului, colaborarea cu dumneavoastră în faza de proiectare este foarte importantă.',
				],
				checks: [],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_2.png',
			id: 2,
		},
		{
			title: 'Măsuratori',
			contents: {
				desc: [
					'Acordăm o mare atenție măsurătorilor la fața locului pentru ca mobilierul să se potrivească la milimetru. Pentru aceasta folosim instrumente de înaltă precizie care ne ajută să croim mobilierul perfect pentru spațiul dumneavoastră.',
				],
				checks: [],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_3.png',
			id: 3,
		},
		{
			title: 'Instalare',
			contents: {
				desc: [
					'Echipa noastră de montaj lucrează la cel mai înalt nivel de profesionalism și nu îi va dezamăgi nici pe cei mai pretențioși dintre dumneavoastră. Mobila vine din Germania gata asamblată, iar montatorii noștri vor așeza corpurile pe poziție. Acest mod de lucru asigură o calitate și o precizie imposibil de egalat în condițiile în care majoritatea comercianților propun livrarea mobilierului pe piese și asamblarea acestuia direct la domiciliul clientului. Considerăm de asemenea esențială buna colaborare dintre proiectant și echipa de montaj. Această colaborare este sudată pe parcursul a multor proiecte realizate împreună.',
				],
				checks: [],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_4.png',
			id: 4,
		},
	];

	const renderDescriptions = (descriptions: string[]) => {
		return descriptions.map((description) => {
			return (
				<p key={description} className='text-textGrey '>
					{description}
				</p>
			);
		});
	};

	const renderChecks = (checks: string[]) => {
		return (
			<>
				{!!checks.length && (
					<div className='flex flex-col tablet:grid tablet:grid-cols-2 tablet:gap-3'>
						{checks.map((check) => {
							return (
								<div className='flex gap-2' key={check}>
									<Image
										src={'/check.svg'}
										alt='Check'
										width={24}
										height={24}
									/>
									<p className='text-textGrey leading-relaxed'>{check}</p>
								</div>
							);
						})}
					</div>
				)}
			</>
		);
	};

	const renderCard = (card: IServicesCard, index: number) => {
		return (
			<div
				key={card.id}
				className='flex flex-col-reverse gap-3 desktop:odd:flex-row desktop:flex-row-reverse tablet:justify-between tablet:items-center desktop:gap-6'
			>
				<div className='flex flex-col gap-3 tablet:w-10/12 desktop:w-7/12 desktop:gap-6 desktopL:w-5/12'>
					<h2 className=' text-4xl font-light leading-snug'>{card.title}</h2>
					{renderDescriptions(card.contents.desc)}
					{renderChecks(card.contents.checks)}
				</div>
				<div className='relative top-0 left-0 w-full max-w-[537px] aspect-square desktop:w-1/2'>
					<Image
						src={card.imgSrc}
						alt={card.alt}
						sizes='(max-width:1024px) 100vw, (min-width:1440px) 537px, 50vw'
						fill
						priority={index === 0 ? true : false}
						className=' object-cover'
					/>
				</div>
			</div>
		);
	};

	return (
		<section className='sectionM gap-20 desktop:gap-24'>
			{cards.map((card, index) => renderCard(card, index))}
		</section>
	);
};
