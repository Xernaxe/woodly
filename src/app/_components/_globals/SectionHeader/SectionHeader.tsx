import React from 'react';
import { twMerge } from 'tailwind-merge';

export const SectionHeader = ({ text, className }: { text: string, className?:string }) => {
	return (
		<div className=''>
			<h2 className={twMerge('text-2xl font-light py-4', className)}>{text}</h2>
		</div>
	);
};
