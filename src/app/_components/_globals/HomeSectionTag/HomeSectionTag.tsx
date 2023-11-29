import React from 'react';

export const HomeSectionTag = ({ text }: { text: string }) => {
	return (
		<div className='flex items-center gap-3'>
			<p className='min-w-fit uppercase text-sm font-light leading-snug [letter-spacing:0.144rem]'>{text}</p>
            <span className='flex h-[1px] w-[25vw] max-w-[7.5rem] bg-accentGreen'></span>
		</div>
	);
};
