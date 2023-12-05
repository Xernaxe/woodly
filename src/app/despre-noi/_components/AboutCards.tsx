import {IAboutCard, ISubCategory} from '@/app/_types/IAboutCard';
import Image from 'next/image';
import React from 'react';

export const AboutCards = () => {

	const cards: IAboutCard[] = [
		{
			contents: {
				descriptions: [
					'Woodly este o companie de design interior de prim plan specializată în transformarea completă a apartamentului dumneavoastră. Oferim o gamă largă de soluții interioare atât clasice, cât și moderne, create cu meticulozitate în Germania și adaptate perfect spațiului dumneavoastră locativ.',
					'Showroom-ul nostru din București, funcționează cu o echipă bine sudată care a supervizat proiectarea și instalarea a numeroase renovări de apartamente. Fiecare membru al echipei noastre este profund dedicat muncii lor, asigurându-se că fiecare proiect este abordat cu devotament și grijă.',
				],
				subCategory: [],
			},
			alt: 'alt',
			imgSrc: '/aboutCard_1.png',
			id:1
		},
		{
			contents: {
				descriptions: [
					'În plus față de valorile noastre de bază, profesionalismul, punctualitatea și încrederea, vă oferim trei garanții fundamentale:',
				],
				subCategory: [
					{
						title: 'GARANȚIA PREȚULUI:',
						description:
							'Woodly asigură că oferta noastră rămâne cea mai competitivă de pe piață. Dacă primiți o ofertă cu un preț mai mic pentru soluții interioare de calitate similară, o vom egaliza sau chiar o vom bate. Este important de menționat că pachetele noastre standard includ adesea accesorii pe care alții le oferă ca opțiuni suplimentare la un cost adițional.',
					},
				],
			},
			alt: 'alt',
			imgSrc: '/aboutCard_1.png',
			id:2
		},
		{
			contents: {
				descriptions: [],
				subCategory: [
					{
						title: 'GARANTIA SERVICIULUI:',
						description:
							'La Woodly, oferim servicii cuprinzătoare și profesionale. Fiecare clientprimește cea mai mare atenție și grijă. Vom fi partenerul dumneavoastră de încredere pe întreg parcursul proiectului de transformare a apartamentului, permițându-vă să vă concentrați asupra a ceea ce contează cu adevărat.',
					},
					{
						title: 'GARANTIA CALITATII:',
						description:
							'Toate produsele noastre sunt fabricate în Germania și vin cu o garanție de 5 ani. Procesul nostru de producție automatizat, controlul calității de la furnizorii furnizorilor și cele 50 de puncte de verificare din timpul procesului de producție sunt toate dovezi ale calității în care credem.',
					},
				],
			},
			alt: 'alt',
			imgSrc: '/aboutCard_1.png',
			id:3
		},
	];

	const renderDescriptions = (descriptions: string[]) => {
		return descriptions.map((desc: string) => (
			<p className='leading-[1.75rem] text-textGrey' key={desc}>
				{desc}
			</p>
		));
	};

	const renderSubCategories = (subCategories: ISubCategory[]) => {
		return subCategories.map((subCategory: ISubCategory) => (
			<div className='flex items-start gap-3' key={subCategory.title}>
				<Image src={'/check.svg'} alt='Check' width={24} height={24} />
				<section className='flex flex-col gap-3'>
					<h4 className=' text-lg font-semibold uppercase text-textGrey'>
						{subCategory.title}
					</h4>
					<p className='text-textGrey leading-[1.75rem]'>
						{subCategory.description}
					</p>
				</section>
			</div>
		));
	};

	const renderCard = (card: IAboutCard) => {
		return (
			<div
				key={card.id}
				className='flex flex-col-reverse gap-3 desktop:odd:flex-row desktop:flex-row-reverse tablet:justify-between tablet:items-center desktop:gap-6'
			>
				<div className='flex flex-col gap-3 tablet:w-10/12 desktop:w-7/12 desktop:gap-6 desktopL:w-5/12'>
					{card.contents.descriptions &&
						renderDescriptions(card.contents.descriptions)}

					{card.contents.subCategory?.length !== 0 &&
						renderSubCategories(card.contents.subCategory)}
				</div>

				<div className='relative top-0 left-0 w-full max-w-[537px] aspect-square desktop:w-1/2'>
					<Image
						src={card.imgSrc}
						alt={card.alt}
						fill
						className='object-cover'
					/>
				</div>
			</div>
		);
	};


	return (
		<section className='sectionM gap-20 desktop:gap-24'>
			{cards.map((card) => renderCard(card))}
		</section>
	);
};
