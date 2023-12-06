import React from 'react';
import Image from 'next/image';
import { IServicesCard } from '@/app/_types/IServicesCard';

export const ServicesCards = () => {
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

	const cards: IServicesCard[] = [
		{
			title: 'Consultanta',
			contents: {
				desc: [
					'Echipa noastra ofera consultanta in alegerea designului in functie de nevoile si gusturile dumneavoastra. Pentru ca casa este unul dintre cele mai dragi locuri, trebuie sa stabilim impreuna aspectele care tin de functionalitatea si aspectul acesteia. Realizarea unui proiect adecvat necesita in primul rand un consultant cu experienta si cu bune abilitati de comunicare. Pentru reusita proiectului este de asemenea necesara determinarea compromisului ideal dintre:',
				],
				checks: [
					'Nevoile estetice',
					'Cerintele de depozitare',
					'Constrangerile tehnice',
					'Reguli de ergonomie',
					'Forma spatiului',
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
					'Designerii nostri sunt pregatit sa ofere solutii inteligente pentru a crea un spatiu armonios si ergonomic in casa dumneavoastra. Schita se face asistata de calculator, in timp real. Veti vedea in 3D mobilierul dumneavoastra inainte de a-l comanda. Tot ce aveti de facut este sa aduceti o schita a spatiului in care sa fie figurate dimensiunile incaperii, pozitionarea usilor, ferestrelor si a racordurilor la utilitati. Pentru ca cerintele sa fie reflectate in configuratia finala a mobilierului, colaborarea cu dumneavoastra in faza de proiectare este foarte importanta.',
				],
				checks: [],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_2.png',
			id: 2,
		},
		{
			title: 'Masuratori',
			contents: {
				desc: [
					'Acordam o mare atentie masuratorilor la fata locului pentru ca mobilierul sa se potriveasca la milimetru. Pentru aceasta folosim intrumente de inalta precizie care ne ajuta sa croim mobilierul perfect pentru spatiul dumneavostra.',
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
					'Echipa noastra de montaj lucreaza la cel mai inalt nivel de profesionalism si nu ii va dezamagi nici pe cei mai pretentiosi dintre dumneavostra. Mobila vine din Germania gata asamblata iar montatorii nostri vor aseza corpurile pe pozitie. Acest mod de lucru asigura o calitate si o precizie imposibil de egalat in conditiile in care majoritatea comerciantilor propun livrarea mobilierului pe piese si asamblarea acestuia direct la domiciliul clientului. Consideram de asemenea esentiala buna colaborare dintre proiectant si echipa de montaj. Aceasta colaborare este sudata pe parcursul a multor proiecte realizate impreuna.',
				],
				checks: [],
			},
			alt: '@TODO',
			imgSrc: '/servicesCard_4.png',
			id: 4,
		},
	];

	return (
		<section className='sectionM gap-20 desktop:gap-24'>
			{cards.map((card, index) => renderCard(card, index))}
		</section>
	);
};
