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
		<Link href={href} className={twMerge(className, 'uppercase w-full text-center border font-medium text-xs py-3 px-3 max-w-[12.5rem] mobile:text-[0.87rem] desktop:px-8')}>
			{text}
		</Link>
	);
};
