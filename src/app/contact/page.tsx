import Image from 'next/image';
import { ContactHero } from './_components/ContactHero';

export default function Home() {
	return (
		<>
			<ContactHero />
			<div className='desktopL:flex flex-col items-center'></div>
		</>
	);
}
