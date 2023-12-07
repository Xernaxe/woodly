import { ContactHero } from './_components/ContactHero';
import { FAQWrapper } from './_components/FAQWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Contactează-ne pentru a putea discuta despre noul tău proiect.',
};


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
