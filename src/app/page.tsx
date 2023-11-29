import Image from 'next/image';
import { Hero } from './_components/Hero/Hero';
import { Who } from './_components/Who/Who';
import { OurServices } from './_components/OurServices/OurServices';
import { OurWork } from './_components/OurWork/OurWork';

export default function Home() {
	return (
		<>
			<Hero />
			<div className='flex flex-col items-center'>
				<Who />
				<OurServices />
			</div>
			<OurWork />
		</>
	);
}
