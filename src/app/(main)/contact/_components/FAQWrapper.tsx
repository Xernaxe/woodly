import React from 'react';
import { IFAQ } from '@/app/(main)/_types/IFAQ';
import { FAQCard } from './FAQCard';
import Link from 'next/link';
import { getAllFAQs } from '../../../../../sanity/sanity-utils';

export default async function FAQWrapper() {
	const structuredDataToAdd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Cum pot obține o estimare a costurilor pentru proiectul meu?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: '<p>Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.</p>',
				},
			},
			{
				'@type': 'Question',
				name: 'Ce set de abilități și experiență au membrii echipei dumneavoastră?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
				},
			},
			{
				'@type': 'Question',
				name: 'Ce stiluri și tendințe în design interior preferați să explorați?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
				},
			},
			{
				'@type': 'Question',
				name: 'Cum pot programa o consultație inițială?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
				},
			},
			{
				'@type': 'Question',
				name: 'Cât durează în general un proiect de design interior?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
				},
			},
		],
	};

	// const FAQCards: IFAQ[] = [
	// 	{
	// 		_id:'0',
	// 		title: 'Cum pot obține o estimare a costurilor pentru proiectul meu?',
	// 		desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
	// 	},
	// 	{
	// 		_id:'1',
	// 		title:
	// 		'Ce set de abilități și experiență au membrii echipei dumneavoastră?',
	// 		desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
	// 	},
	// 	{
	// 		_id:'2',
	// 		title:
	// 		'Ce stiluri și tendințe în design interior preferați să explorați?',
	// 		desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
	// 	},
	// 	{
	// 		_id:'3',
	// 		title: 'Cum pot programa o consultație inițială?',
	// 		desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
	// 	},
	// 	{
	// 		_id:'4',
	// 		title: 'Cât durează în general un proiect de design interior?',
	// 		desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
	// 	},
	// ];

	const FAQCards: IFAQ[] = await getAllFAQs();
	console.log(FAQCards)
	return (
		<section className='sectionM gap-4'>
			<div className='desktop:m-auto desktop:w-[80%]'>
				<div className='flex flex-col gap-6 max-w-[26rem] m-auto mb-12'>
					<h2 className='text-4xl font-light text-center'>
						Întrebări Frecvente
					</h2>
					<p className='text-textGrey  text-center'>
						Aveți întrebări? Noi avem răspunsuri. Dacă nu găsiți ceea ce
						căutați, nu ezitați să{' '}
						<Link
							href='#hero'
							className='text-accentGreen underline cursor-pointer'
						>
							ne contactați
						</Link>
						.
					</p>
				</div>
				{FAQCards.map((card, index) => (
					<FAQCard
						key={card._id}
						card={card}
						index={index}
						arrLength={FAQCards.length}
					/>
				))}
			</div>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredDataToAdd),
				}}
			/>
		</section>
	);
};
