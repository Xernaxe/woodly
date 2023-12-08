import React from 'react';
import { IFAQ } from '@/app/(main)/_types/IFAQ';
import { FAQCard } from './FAQCard';
import Link from 'next/link';
import { getAllFAQs } from '../../../../../sanity/sanity-utils';

export default async function FAQWrapper() {
	
	const constructStructureData = (FAQCards: IFAQ[]) => {
		const mainEntity = FAQCards.map((card) => ({
			'@type': 'Question',
			name: card.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: card.answer,
			},
		}));

		return {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity,
		};
	};

	const FAQCards: IFAQ[] = await getAllFAQs();

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
					__html: JSON.stringify(constructStructureData(FAQCards)),
				}}
			/>
		</section>
	);
}
