import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader';
import { MainButton } from '../_globals/MainButton';
import { HomeSectionTag } from '../_globals/HomeSectionTag';
import { WhoSlider } from './WhoSlider/WhoSlider';
import { getAllProjectsImages } from '../../../../../sanity/sanity-utils';

export async function Who() {

	const projectsImages = await getAllProjectsImages();
	// console.log(projectsImages)
	return (
		<section className='sectionM desktopL:mb-0'>
			<HomeSectionTag text='Cine Suntem' />
			<div className='flex items-center'>
				<SectionHeader
					text={
						'Experți în amenajări interioare de înaltă clasă, cu sediul în București, România'
					}
				/>
				<div className='hidden w-1/2 desktop:flex desktop:justify-end'>
					<MainButton
						href='/portofoliu'
						text={'Vezi portofoliul'}
						className='bg-black text-white border-white flex justify-center'
					/>
				</div>
			</div>
			<div className=' text-sm leading-loose text-textGrey  desktop:text-base desktop:leading-relaxed desktop:flex desktop:gap-10 desktop:pt-4'>
				<p className='text-inherit desktop:w-7/12'>
					La Woodly, ne dedicăm misiunii de a transforma spațiul tău într-un
					mediu personalizat, adaptat stilului și nevoilor tale. Cu o vastă
					experiență în proiectare și execuție, am câștigat respectul clienților
					noștri prin transparență și încredere.
				</p>
				<p className='text-inherit desktop:w-6/12'>
					Cu o echipă de specialiști în amenajări, punem la dispoziție cele mai
					calitative materiale și tehnologii pentru a asigura că fiecare proiect
					devine o capodoperă.
				</p>
			</div>

			<div className='w-1/2 py-6 desktop:hidden'>
				<MainButton
					href='/portofoliu'
					text={'Vezi portofoliul'}
					className='bg-black text-white border-white flex justify-center'
				/>
			</div>

			<WhoSlider projectsImages={projectsImages} />
		</section>
	);
};
