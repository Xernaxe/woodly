import React from 'react';
import { AboutHero } from './_components/AboutHero';
import { Stats } from './_components/Stats';
import { AboutCards } from './_components/AboutCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Despre Noi',
	description: 'Woodly este o companie de design interior de prim plan specializată în transformarea completă a apartamentului dumneavoastră.',
	openGraph: {
		url: new URL('https://woodly.vercel.app/despre-noi'),
		title: 'Despre Noi | Woodly',
		description: 'Woodly este o companie de design interior de prim plan specializată în transformarea completă a apartamentului dumneavoastră.',
	}
	
};

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
