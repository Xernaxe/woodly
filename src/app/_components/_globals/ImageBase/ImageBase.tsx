import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const ImageBase = ({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className?: string;
}) => {
	return (
		<div
			className={twMerge('relative top-0 left-0 w-full h-[90vw] tablet:h-[60vw]', className)}
		>
			<Image src={src} alt={alt} fill className='object-cover' />
		</div>
	);
};
