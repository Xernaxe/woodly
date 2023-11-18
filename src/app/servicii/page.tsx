import Image from 'next/image';
import { ServicesHero } from './_components/ServicesHero/ServicesHero';
import { ServicesCards } from './_components/ServicesCards/ServicesCards';

export default function Home() {
	return (
		<>
			<ServicesHero />
			<ServicesCards />
		</>
	);
}
