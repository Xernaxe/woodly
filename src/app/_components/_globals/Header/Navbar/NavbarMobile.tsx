'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import INavLinks from '@/app/_types/INavLinks';
import { Burgermenu } from './Burgermenu';
import { useBurgerMenu } from '@/app/_providers/BurgermenuContext';

export const NavbarMobile = ({ navLinks }: { navLinks: INavLinks[] }) => {
	const { isBurgerMenuOpen } = useBurgerMenu();

	return (
		<nav className='flex items-center justify-between desktop:hidden'>
			<a href='/' className='relative z-20 flex w-[8.3rem] h-[2.25rem]'>
				<Image src={'/logo.svg'} alt='' fill={true} className='object-cover' />
			</a>
			<Burgermenu />

			{isBurgerMenuOpen && (
				<ul className='flex flex-col justify-center fixed z-10 w-screen h-screen top-0 left-0 bg-black'>
					{navLinks.map((link) => {
						return (
							<li
								key={link.href}
								className='flex justify-center relative overflow-hidden group'
							>
								<Link
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
