import Image from 'next/image';
import { ContactHero } from './_components/ContactHero';
import { FAQWrapper } from './_components/FAQWrapper';

export default function Home() {
	return (
		<>
			<ContactHero />
			<div className='desktopL:flex flex-col items-center'>
				<FAQWrapper />
			</div>
		</>
	);
}
