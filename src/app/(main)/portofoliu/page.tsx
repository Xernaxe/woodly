import { PortfolioCards } from './_components/PortfolioCards';
import { PortfolioHero } from './_components/PortfolioHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portofoliu',
	description:
		'Proiectele la care am lucrat noi.',
};

export default function Home() {
	return (
		<>
			<PortfolioHero />

			<div className='desktopL:flex flex-col items-center'>
				<PortfolioCards />
			</div>
		</>
	);
}
