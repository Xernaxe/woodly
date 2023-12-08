import { ServicesHero } from './_components/ServicesHero';
import { ServicesCards } from './_components/ServicesCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Servicii',
	description: 'Serviciile pe care Woodly ți le poate oferi.',
	openGraph: {
		url: new URL('https://woodly.vercel.app/servicii'),
		title: 'Servicii | Woodly',
		description: 'Serviciile pe care Woodly ți le poate oferi.',
	}
};

export default function Home() {
	return (
		<>
			<ServicesHero />
			<div className='desktopL:flex flex-col items-center'>
				<ServicesCards />
			</div>
		</>
	);
}
