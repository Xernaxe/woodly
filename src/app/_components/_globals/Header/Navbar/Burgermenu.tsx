'use client';
import Image from 'next/image';
import React from 'react';
import { useBurgerMenu } from '@/app/_providers/BurgermenuContext';

export const Burgermenu = () => {
	const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useBurgerMenu();

	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<div className='relative z-20' onClick={toggleBurgerMenu}>
			{!isBurgerMenuOpen && (
				<Image
					width={32}
					height={32}
					className='w-[clamp(2rem,_5.3vw,_2.5rem)] h-[clamp(2rem,_5.3vw,_2.5rem)]'
					src='/burgermenu.svg'
					alt='OPEN'
					priority={true}
				/>
			)}
			{isBurgerMenuOpen && (
				<Image
					width={24}
					height={24}
					src='/closemenu.svg'
					alt='CLOSE'
					priority={true}
				/>
			)}
		</div>
	);
};
