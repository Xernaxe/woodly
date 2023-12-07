import React from 'react';
import INavLinks from '@/app/(main)/_types/INavLinks';
import { NavbarDesktop } from './Navbar/NavbarDesktop';
import { NavbarMobile } from './Navbar/NavbarMobile';
import { BurgerMenuProvider } from '@/app/(main)/_providers/BurgermenuContext';

export const Header = () => {
	const navLinks: INavLinks[] = [
		{ name: 'Acasa', href: '/' },
		{ name: 'Despre noi', href: '/despre-noi' },
		{ name: 'Servicii', href: '/servicii' },
		{ name: 'Portofoliu', href: '/portofoliu' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className='paddingsX py-2 absolute z-10 top-0 left-0 w-screen desktop:border-b border-accentGrey border-solid desktop:py-[1.88rem] '>
			<div className='maxW m-auto'>
				<NavbarDesktop navLinks={navLinks} />
				<BurgerMenuProvider>
					<NavbarMobile navLinks={navLinks} />
				</BurgerMenuProvider>
			</div>
		</header>
	);
};
