'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import INavLinks from '@/app/(main)/_types/INavLinks';
import { Burgermenu } from './Burgermenu';
import {
	toggleOverflow,
	useBurgerMenu,
} from '@/app/(main)/_providers/BurgermenuContext';

export const NavbarMobile = ({ navLinks }: { navLinks: INavLinks[] }) => {
	const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useBurgerMenu();

	return (
		<nav className='flex items-center justify-between desktop:hidden'>
			<Link
				aria-label='Go back to the home page.'
				href='/'
				className='relative z-20 flex w-[8.3rem] h-[2.25rem]'
			>
				<Image
					src={'/logo_1.svg'}
					alt=''
					fill={true}
					className=' object-cover'
				/>
			</Link>
			<Burgermenu />

			{isBurgerMenuOpen && (
				<ul className='flex flex-col justify-center fixed z-10 w-screen h-screen top-0 left-0 bg-black'>
					{navLinks.map((link) => {
						return (
							<li
								key={link.href}
								className='flex justify-center relative overflow-hidden group'
								onClick={() => {
									setIsBurgerMenuOpen(!isBurgerMenuOpen);
									toggleOverflow();
								}}
							>
								<Link
									aria-label={`Acceseaza pagina ${link.name}`}
									href={link.href}
									className='font-outfit uppercase text-white leading-loose mx-4 group-hover:font-semibold'
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};
