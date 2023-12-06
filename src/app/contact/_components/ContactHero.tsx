import React from 'react';
import Image from 'next/image';
import { ContactForm } from './ContactForm';

export const ContactHero = () => {
	return (
		<section className='sectionP max-w-none flex flex-col pt-20 relative bg-black desktop:pt-40 desktopL:items-center'>
			<div className='flex flex-col gap-10 maxW w-full desktop:flex-row desktop:justify-between'>
				<div className='flex flex-col gap-5 desktop:w-[37%] desktop:justify-between'>
					<h1 className='text-white text-3xl font-light desktopL:text-5xl'>Contacteaza-ne</h1>
					<ContactForm />
				</div>

				<div className='flex flex-col gap-5 items-center desktop:w-1/2'>
					<div className='flex flex-col gap-2 tablet:flex-row tablet:w-full tablet:justify-between desktopL:max-w-[480px]'>
						<div className=''>
							<h2 className='text-[#B3B3B3] font-light text-center desktop:text-start'>Email</h2>
							<p className='text-white font-light text-2xl text-center tablet:text-xl'>woodly.rooms@gmail.com</p>
						</div>
						<div className=''>
							<h2 className='text-[#B3B3B3] font-light text-center desktop:text-start'>Numar de contact</h2>
							<p className='text-white font-light text-2xl text-center tablet:text-xl'>+40 755 638 187</p>
						</div>
					</div>
					<div className='relative top-0 left-0 w-full max-w-[480px] aspect-square '>
						<Image
							src={'/about_2.png'}
							alt={'@TODO'}
							sizes='(max-width:1024px) 100vw, (min-width:1440px) 537px, 50vw'
							priority
							fill
							className=' object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
