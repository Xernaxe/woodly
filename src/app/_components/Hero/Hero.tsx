import Image from 'next/image';
import React from 'react';

export const Hero = () => {
	return (
		<section className='section'>
			<div className=' flex items-center'>
				<p className='text-white font-light uppercase text-sm min-w-max'>
					Firma de amenajari interioare
				</p>
				<span className='block h-[1px] w-full bg-accentGreen'></span>
			</div>

			<div className=''>
				<h1 className='text-white font-light text-4xl desktopL:text-5xl'>
					Amenajam locuri in care fiecare detaliu te inspira.
				</h1>
				<p className='text-white font-light'>
					Bun venit la Woodly, locul unde arta se întalneste cu functionalitatea
					intr-o simfonie de lux si stil. Suntem aici sa facem realitate din
					visul tau, transformand fiecare spatiu într-un basm, unde rafinamentul
					se îmbină cu confortul.
				</p>
			</div>

			<div className='absolute -z-10 top-0 left-0'>
				<Image
					className='object-cover max-w-screen w-screen h-screen'
					src={'/heroImg.png'}
					width={1440}
					height={1080}
					alt='Hero Image'
					priority={true}
				/>
			</div>
		</section>
	);
};
