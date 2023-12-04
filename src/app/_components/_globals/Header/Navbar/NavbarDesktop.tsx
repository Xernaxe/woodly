import INavLinks from '@/app/_types/INavLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavbarDesktop = ({ navLinks }: { navLinks: INavLinks[] }) => {
	return (
		<nav className='hidden justify-between items-center desktop:flex'>
			<a href='/' className='relative flex w-[8.3rem] h-[2.25rem]'>
				<Image src={'./logo.svg'} alt='' fill={true} className='object-cover' />
			</a>

			<ul className='flex'>
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
							<span className='hidden absolute content-none bottom-0 w-0 h-0.5 bg-accentGreen transition-all ease-in-out group-hover:block group-hover:w-full'></span>
						</li>
					);
				})}
			</ul>

			<div className='flex gap-3'>
				<Image src={'./phone.svg'} alt='Phone number' width={24} height={24} />
				<p className='font-outfit text-white'>+40 755 636 187</p>
			</div>
		</nav>
	);
};
