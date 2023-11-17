import React from 'react';
import INavLinks from '@/app/_types/INavLinks';
import { NavbarDesktop } from './Navbar/NavbarDesktop';
import { NavbarMobile } from './Navbar/NavbarMobile';
import { BurgerMenuProvider } from '@/app/_providers/BurgermenuContext';

export const Header = () => {
	const navLinks: INavLinks[] = [
		{ name: 'Acasa', href: '/' },
		{ name: 'Despre noi', href: '/despre-noi' },
		{ name: 'Servicii', href: '/servicii' },
		{ name: 'Portofoliu', href: '/portofoliu' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className='absolute top-0 left-0 w-screen py-2 px-6  desktop:border-b border-accentGrey border-solid desktop:py-[1.88rem]'>
			<NavbarDesktop navLinks={navLinks} />
			<BurgerMenuProvider>
				<NavbarMobile navLinks={navLinks} />
			</BurgerMenuProvider>
		</header>
	);
};
