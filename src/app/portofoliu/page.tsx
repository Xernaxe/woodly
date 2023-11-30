import { PortfolioCards } from './_components/PortfolioCards';
import { PortfolioHero } from './_components/PortfolioHero';

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
