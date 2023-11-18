import React from 'react';
import Image from 'next/image';

export const ServicesCards = () => {
	const checks = [
		'Nevoile estetice',
		'Cerintele de depozitare',
		'Constrangerile tehnice',
		'Reguli de ergonomie',
		'Forma spatiului',
		'Buget',
	];

	const cards = [
		{
			title: 'Proiectare',
			desc: 'Designerii nostri sunt pregatit sa ofere solutii inteligente pentru a crea un spatiu armonios si ergonomic in casa dumneavoastra. Schita se face asistata de calculator, in timp real. Veti vedea in 3D mobilierul dumneavoastra inainte de a-l comanda. Tot ce aveti de facut este sa aduceti o schita a spatiului in care sa fie figurate dimensiunile incaperii, pozitionarea usilor, ferestrelor si a racordurilor la utilitati. Pentru ca cerintele sa fie reflectate in configuratia finala a mobilierului, colaborarea cu dumneavoastra in faza de proiectare este foarte importanta.',
			imgSrc: '/servicesCard_2.png',
		},
		{
			title: 'Masuratori',
			desc: 'Acordam o mare atentie masuratorilor la fata locului pentru ca mobilierul sa se potriveasca la milimetru. Pentru aceasta folosim intrumente de inalta precizie care ne ajuta sa croim mobilierul perfect pentru spatiul dumneavostra.',
			imgSrc: '/servicesCard_3.png',
		},
		{
			title: 'Instalare',
			desc: 'Echipa noastra de montaj lucreaza la cel mai inalt nivel de profesionalism si nu ii va dezamagi nici pe cei mai pretentiosi dintre dumneavostra. Mobila vine din Germania gata asamblata iar montatorii nostri vor aseza corpurile pe pozitie. Acest mod de lucru asigura o calitate si o precizie imposibil de egalat in conditiile in care majoritatea comerciantilor propun livrarea mobilierului pe piese si asamblarea acestuia direct la domiciliul clientului. Consideram de asemenea esentiala buna colaborare dintre proiectant si echipa de montaj. Aceasta colaborare este sudata pe parcursul a multor proiecte realizate impreuna.',
			imgSrc: '/servicesCard_4.png',
		},
	];

	return (
		<section className='sectionM gap-10'>
			<div className='flex flex-col-reverse gap-2'>
				<div className=''>
					<h2 className=' text-4xl font-light leading-snug'>Consultanta</h2>
					<p>
						Echipa noastra ofera consultanta in alegerea designului in functie
						de nevoile si gusturile dumneavoastra. Pentru ca casa este unul
						dintre cele mai dragi locuri, trebuie sa stabilim impreuna aspectele
						care tin de functionalitatea si aspectul acesteia. Realizarea unui
						proiect adecvat necesita in primul rand un consultant cu experienta
						si cu bune abilitati de comunicare. Pentru reusita proiectului este
						de asemenea necesara determinarea compromisului ideal dintre:
					</p>
					<div className=''>
						{checks.map((check) => {
							return (
								<div className='flex' key={check}>
									<Image
										src={'/check.svg'}
										alt='Check'
										width={24}
										height={24}
									/>
									<p>{check}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className='relative top-0 left-0 w-full h-[90vw]'>
					<Image
						src={'/servicesCard_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>

			{cards.map((card) => {
				return (
					<div className='flex flex-col-reverse gap-2'>
						<div className=''>
							<h2 className=' text-4xl font-light leading-snug'>
								{card.title}
							</h2>
							<p>{card.desc}</p>
						</div>
						<div className='relative top-0 left-0 w-full h-[90vw]'>
							<Image
								src={card.imgSrc}
								alt={'@TODO'}
								fill
								className='object-cover'
							/>
						</div>
					</div>
				);
			})}
		</section>
	);
};
