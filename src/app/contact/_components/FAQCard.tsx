'use client';
import React from 'react';
import { IFAQ } from '@/app/_types/IFAQ';
import { useState } from 'react';

export const FAQCard = ({
	card,
	index,
	arrLength,
	key,
}: {
	card: IFAQ;
	index: number;
	arrLength: number;
	key: React.Key
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const showDivider = index + 1 !== arrLength;

	return (
		<>
			<section key={card.title} className='relative flex flex-col gap-2 py-6'>
				<h2
					onClick={() => setIsOpen(!isOpen)}
					className='flex cursor-pointer justify-between text-xl font-medium'
				>
					{card.title}
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							className={`transition-all ${isOpen ? 'rotate-90' : ''}`}
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M2.25 12.5001C2.25 12.0859 2.58579 11.7501 3 11.7501L19.1893 11.7501L13.4697 6.03045C13.1768 5.73756 13.1768 5.26268 13.4697 4.96979C13.7626 4.6769 14.2374 4.6769 14.5303 4.96979L21.5303 11.9698C21.8232 12.2627 21.8232 12.7376 21.5303 13.0305L14.5303 20.0305C14.2374 20.3233 13.7626 20.3233 13.4697 20.0305C13.1768 19.7376 13.1768 19.2627 13.4697 18.9698L19.1893 13.2501L3 13.2501C2.58579 13.2501 2.25 12.9143 2.25 12.5001Z'
								fill={isOpen ? 'green' : 'black'}
							/>
						</svg>
					</span>
				</h2>

				<p
					className={`overflow-hidden transition-all ${
						isOpen ? 'max-h-[500px]' : 'max-h-0'
					}`}
				>
					{card.desc}
				</p>
			</section>
			{showDivider && (
				<div className='content-[""] bottom-0 relative flex w-full h-[1px] bg-[#DADADA] translate-y-full'></div>
			)}
		</>
	);
};
