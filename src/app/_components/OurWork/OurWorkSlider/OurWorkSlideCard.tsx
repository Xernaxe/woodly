import React from 'react';
import Image from 'next/image';

export const OurWorkSlideCard = () => {
	return (
		<div className='embla__slide flex flex-col relative flex-[0_0_80%] min-w-0 max-h-[537px] aspect-square mx-2  tablet:flex-[0_0_70%] desktop:flex-[0_0_100%] desktop:aspect-video desktop:flex-row-reverse'>
			<div className='flex flex-col w-full h-full gap-2 desktop:flex-row-reverse desktop:mx-[8%] desktopL:mx-auto maxW'>
				<div className='relative w-full h-full max-w-[537px] max-h-[537px] tablet:h-4/6 desktop:absolute desktop:w-[60%] desktop:h-full'>
					<Image
						src={'/WhoCarousel_1.png'}
						alt={'@TODO'}
						fill
						sizes='100vw'
						objectFit='cover'
					/>

					<div className='hidden absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,_rgba(0,0,0,0.30)_0%,_rgba(0,0,0,0.30)_100%),_linear-gradient(270deg,rgba(0,0,0,0.00)_51.25%,_#000_117.28%)] desktop:flex'></div>
				</div>
				<div className=' flex flex-col gap-2 p-2 desktop:absolute desktop:top-1/2  desktop:w-1/2 desktop:left-[10%] desktop:max-w-[500px] desktop:z-10 desktop:h-fit desktopL:w-[50%]  desktopL:relative desktop:-translate-y-1/2 desktopL:-left-[450px] desktop:gap-6'>
					<div className='flex items-center gap-3 '>
						<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
							01
						</p>
						<span className=' h-[1px] w-2/12 bg-accentGreen desktop:w-16'></span>
						<p className=' text-xs font-light uppercase letter-spacing text-white desktop:text-sm'>
							04
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='text-white text-xl font-light desktop:text-4xl'>
							Great View Apartment
						</h3>
						<p className='hidden text-white text-xs font-light leading-loose tablet:block desktop:text-sm desktop:leading-loose'>
							Apartamentul cu priveliște spectaculoasă. Un spațiu luminos și
							modern, ideal pentru a vă bucura de panorame uimitoare și momente
							de relaxare.
						</p>
					</div>
					<div className='flex items-center gap-2 desktop:gap-4'>
						<span className=' h-[1px] w-2/12 bg-accentBlue desktop:w-8'></span>
						<p className=' text-xs uppercase letter-spacing text-white'>
							Vezi proiectul
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
