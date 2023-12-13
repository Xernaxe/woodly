import INavLinks from '@/app/(main)/_types/INavLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavbarDesktop = ({ navLinks }: { navLinks: INavLinks[] }) => {
	return (
		<nav className='hidden justify-between items-center desktop:flex'>
			<Link
				aria-label='Go back to the home page.'
				href='/'
				className='relative flex w-[8.3rem] h-[2.25rem]'
			>
				<Image
					src={'/logo_1.svg'}
					alt=''
					fill={true}
					className=' object-cover'
				/>
			</Link>

			<ul className='flex'>
				{navLinks.map((link, index) => {
					return (
						<li
							key={link.href}
							className='flex justify-center relative overflow-hidden group'
							>
							<Link
								aria-label={`Acceseaza pagina ${link.name}`}
								tabIndex={index + 1}
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

			<Link href={'tel:0040755636187'} className='flex gap-3'>
				<Image src={'/phone.svg'} alt='Phone number' width={24} height={24} />
				<p className='font-outfit text-white'>+40 755 636 187</p>
			</Link>
		</nav>
	);
};
