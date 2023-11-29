import React from 'react';
import { twMerge } from 'tailwind-merge';

export const SectionHeader = ({ text, className }: { text: string, className?:string }) => {
	return (
		<div className=''>
			<h2 className={twMerge('text-2xl font-light leading-snug py-4 desktop:text-3xl desktop:leading-snug desktop:py-6 desktopL:text-4xl desktopL:leading-snug', className)}>{text}</h2>
		</div>
	);
};
