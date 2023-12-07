import { ServicesHero } from './_components/ServicesHero';
import { ServicesCards } from './_components/ServicesCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Servicii',
	description:
		'Serviciile pe care Woodly ti le poate oferi.',
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
