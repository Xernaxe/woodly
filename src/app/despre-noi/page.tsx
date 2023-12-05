import React from 'react';
import { AboutHero } from './_components/AboutHero';
import { Stats } from './_components/Stats';
import { AboutCards } from './_components/AboutCards';

export default function Home() {
	return (
		<>
			<AboutHero />
			<div className='desktopL:flex flex-col items-center'>
				<Stats />
				<AboutCards />
			</div>
		</>
	);
}
