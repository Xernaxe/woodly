import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader/SectionHeader';
import { MainButton } from '../_globals/MainButton/MainButton';
import { HomeSectionTag } from '../_globals/HomeSectionTag/HomeSectionTag';
import { WhoSlider } from './WhoSlider/WhoSlider';

export const Who = () => {
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
						text={'Vezi portofoliu'}
						className='bg-black text-white border-white flex justify-center'
					/>
				</div>
			</div>
			<div className=' text-sm leading-loose text-textGrey  desktop:text-base desktop:leading-relaxed desktop:flex desktop:gap-10 desktop:pt-4'>
				<p className='text-inherit desktop:w-7/12'>
					La Woodly, ne dedicam misiunii de a transforma spatiul tau intr-un
					mediu personalizat, adaptat stilului si nevoilor tale. Cu o vasta
					experienta in proiectare si executie, am castigat respectul clientilor
					nostri prin transparenta si încredere.
				</p>
				<p className='text-inherit desktop:w-6/12'>
					Cu o echipa de specialisti în amenajari, punem la dispozitie cele mai
					calitative materiale si tehnologii pentru a asigura ca fiecare proiect
					devine o capodopera.
				</p>
			</div>

			<div className='w-1/2 py-6 desktop:hidden'>
				<MainButton
					href='/portofoliu'
					text={'Vezi portofoliu'}
					className='bg-black text-white border-white flex justify-center'
				/>
			</div>

			<WhoSlider/>
		</section>
	);
};
