import React from 'react';
import { AboutHero } from './_components/About_Hero/AboutHero';
import { Stats } from './_components/Stats/Stats';
import { AboutCards } from './_components/AboutCards/AboutCards';

export default function Home() {
	return (
		<>
			<AboutHero />
			<div className='flex flex-col items-center'>
				<Stats />
				<AboutCards />
			</div>
		</>
	);
}
