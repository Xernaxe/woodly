import { SingleDetails } from './_components/SingleDetails';
import { SingleHero } from './_components/SingleHero';
import { SingleImages } from './_components/SingleImages';

export default function Home() {
	return (
		<>
			<SingleHero />
			<div className='desktopL:flex flex-col items-center'>
				<SingleDetails />
				<SingleImages />
			</div>
		</>
	);
}
