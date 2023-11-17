import React from 'react';

export const SectionHeader = ({ text }: { text: string }) => {
	return (
		<div className='flex items-center gap-3'>
			<h2 className='uppercase text-sm font-light leading-snug [letter-spacing:0.144rem]'>{text}</h2>
			<span className='flex h-[1px] w-[25vw] max-w-1/2 bg-accentGreen'></span>
		</div>
	);
};
