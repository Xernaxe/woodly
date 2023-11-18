import { SectionHeader } from '@/app/_components/_globals/SectionHeader/SectionHeader';
import React from 'react';
import Image from 'next/image';

export const AboutHero = () => {
	return (
		<section className='section pt-20 relative bg-black'>
			<h3 className='uppercase text-xs text-center font-light [letter-spacing:0.144rem] text-white'>
				Despre Noi
			</h3>
			<SectionHeader
				className='text-white text-center'
				text='Suntem condusi de pasiunea de a crea design interior care face diferenta'
			/>
			<p className='text-white leading-relaxed font-light text-sm text-center'>
				Misiunea noastră este să facem diferența prin design interior creativ și
				autentic, construind locuințe și spații care vă definesc autenticitatea.
				Suntem dedicați să vă ajutăm să vă atingeți potențialul și să vă
				bucurați de un mediu care inspiră.
			</p>

			<div className='pt-4'>
				<div className='relative h-[90vw]'>
					<div className='relative top-0 left-0 w-full h-full'>
						<Image src={'/about_1.png'} alt={'@TODO: Change'} fill />
					</div>
					<div className='hidden top-0 left-0 w-full h-full'>
						<Image src={'/about_2.png'} alt={'@TODO: Change'} fill />
					</div>
				</div>
			</div>
		</section>
	);
};
