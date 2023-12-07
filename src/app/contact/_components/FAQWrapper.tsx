import React from 'react';
import { IFAQ } from '@/app/_types/IFAQ';
import { FAQCard } from './FAQCard';

export const FAQWrapper = () => {
	const FAQCards: IFAQ[] = [
		{
			title: 'Cum pot obține o estimare a costurilor pentru proiectul meu?',
			desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
		},
		{
			title:
				'Ce set de abilități și experiență au membrii echipei dumneavoastră?',
			desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
		},
		{
			title:
				'Ce stiluri și tendințe în design interior preferați să explorați?',
			desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
		},
		{
			title: 'Cum pot programa o consultație inițială?',
			desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
		},
		{
			title: 'Cât durează în general un proiect de design interior?',
			desc: 'Pentru a obține o estimare a costurilor, vă rugăm să ne contactați și să ne oferiți detalii despre proiectul dumneavoastră. Vom fi bucuroși să vă furnizăm o ofertă personalizată.',
		},
	];

	return (
		<section className='sectionM gap-4'>
			<div className='desktop:m-auto desktop:w-[80%]'>
				<div className='flex flex-col gap-6 max-w-[26rem] m-auto mb-12'>
					<h2 className='text-4xl font-light text-center'>Întrebări Frecvente</h2>
					<p className='text-textGrey  text-center'>
						Aveți întrebări? Noi avem răspunsuri. Dacă nu găsiți ceea ce
						căutați, nu ezitați să <span className='text-accentGreen underline cursor-pointer'>ne contactați</span>.
					</p>
				</div>
				{FAQCards.map((card, index) => (
					<FAQCard key={card.title} card={card} index={index} arrLength={FAQCards.length} />
				))}
			</div>
		</section>
	);
};
