import { ContactHero } from './_components/ContactHero';
import { FAQWrapper } from './_components/FAQWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Contactează-ne pentru a putea discuta despre noul tău proiect.',
};

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

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataToAdd) }}
			/>
			<ContactHero />
			<div className='desktopL:flex flex-col items-center'>
				<FAQWrapper />
			</div>
		</>
	);
}
