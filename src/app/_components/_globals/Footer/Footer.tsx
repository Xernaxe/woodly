import INavLinks from '@/app/_types/INavLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	const navLinks: INavLinks[] = [
		{ name: 'Acasa', href: '/' },
		{ name: 'Despre noi', href: '/despre-noi' },
		{ name: 'Servicii', href: '/servicii' },
		{ name: 'Portofoliu', href: '/portofoliu' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<footer className='border-t border-accentGrey p-8 bg-black px-[5%] py-10 desktopL:px-[12%] desktopL:py-[5rem]'>
			<div className='flex flex-col items-center maxW m-auto gap-10 tablet:flex-row tablet:items-start tablet:justify-between'>
				<a href='/' className='relative flex w-[8.3rem] h-[2.25rem]'>
					<Image
						src={'/logo.svg'}
						alt=''
						fill={true}
						className='object-cover'
					/>
				</a>

				<ul className='flex flex-col'>
					{navLinks.map((link) => {
						return (
							<li
								key={link.href}
								className='text-center tablet:text-start'
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

				<div className=''>
					<div className='flex gap-3'>
						<Image src={'./phone.svg'} alt='' width={24} height={24} />
						<p className='font-outfit text-white'>+40 755 636 187</p>
					</div>

					<div className='flex gap-3'>
						<Image src={'./email.svg'} alt='' width={24} height={24} />
						<p className='font-outfit text-white'>woodly.rooms@gmail.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
