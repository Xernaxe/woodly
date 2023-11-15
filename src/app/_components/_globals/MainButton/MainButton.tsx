import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const MainButton = ({
	href,
	text,
	className,
}: {
	href: string;
	text: string;
	className: string;
}) => {
	return (
		<Link href={href} className={twMerge(className, 'uppercase w-full text-center border text-xs py-3 px-3 mobile:text-sm')}>
			{text}
		</Link>
	);
};
