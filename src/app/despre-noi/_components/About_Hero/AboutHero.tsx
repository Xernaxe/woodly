import { SectionHeader } from '@/app/_components/_globals/SectionHeader/SectionHeader';
import React from 'react';
import Image from 'next/image';

export const AboutHero = () => {
	return (
		<section className='flex flex-col pt-20 relative bg-black desktop:pt-40 desktop:pb-0 '>
			<div className='paddingsX m-auto desktop:w-10/12'>
				<h3 className='uppercase text-xs text-center font-light [letter-spacing:0.144rem] text-white'>
					Despre Noi
				</h3>
				<SectionHeader
					className='text-white text-center desktop:text-5xl'
					text='Suntem condusi de pasiunea de a crea design interior care face diferenta'
				/>
				<p className='text-white leading-relaxed font-light text-sm text-center'>
					Misiunea noastră este să facem diferența prin design interior creativ
					și autentic, construind locuințe și spații care vă definesc
					autenticitatea. Suntem dedicați să vă ajutăm să vă atingeți
					potențialul și să vă bucurați de un mediu care inspiră.
				</p>
			</div>

			<div className=' py-4 desktop:pb-0'>
				<div className='desktop:bg-[linear-gradient(0deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,1)_100%)] desktop:translate-y-1'>
					<div className='paddingsX relative flex gap-8 h-[90vw] desktop:h-[30vw]'>
						<div className='relative  w-full aspect-square'>
							<Image src={'/about_1.png'} alt={'@TODO: Change'} fill />
						</div>
						<div className='hidden relative  w-full aspect-square desktop:block'>
							<Image src={'/about_2.png'} alt={'@TODO: Change'} fill />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
