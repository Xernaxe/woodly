import Image from 'next/image';
import { ServicesHero } from './_components/ServicesHero';
import { ServicesCards } from './_components/ServicesCards';

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
