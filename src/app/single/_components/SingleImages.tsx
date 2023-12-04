import React from 'react';
import Image from 'next/image';

export const SingleImages = () => {
	return (
		<section className='sectionM desktopL:w-full '>
			<div className='flex flex-wrap justify-center gap-8 tablet:gap-[20px] tablet:grid tablet:grid-cols-2  '>
				<div className='relative top-0 left-0 w-full max-w-[537px] desktop:max-w-none aspect-square '>
					<Image
						src={'/about_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
				<div className='relative top-0 left-0 w-full max-w-[537px] desktop:max-w-none aspect-square'>
					<Image
						src={'/about_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
				<div className='relative top-0 left-0 w-full max-w-[537px] desktop:max-w-none aspect-square'>
					<Image
						src={'/about_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
				<div className='relative top-0 left-0 w-full max-w-[537px] desktop:max-w-none aspect-square'>
					<Image
						src={'/about_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>
		</section>
	);
};
