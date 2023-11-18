import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader/SectionHeader';
import { MainButton } from '../_globals/MainButton/MainButton';
import { HomeSectionTag } from '../_globals/HomeSectionTag/HomeSectionTag';

export const Who = () => {
	return (
		<section className='section'>
			<HomeSectionTag text='Cine Suntem'/>
			<SectionHeader text={'Experți în amenajări interioare de înaltă clasă, cu sediul în București, România'} />
			<div className=' text-xs leading-loose text-textGrey pb-6'>
				<p className='text-inherit'>
					La Woodly, ne dedicam misiunii de a transforma spatiul tau intr-un
					mediu personalizat, adaptat stilului si nevoilor tale. Cu o vasta
					experienta in proiectare si executie, am castigat respectul clientilor
					nostri prin transparenta si încredere.
				</p>
				<p className='text-inherit'>
					Cu o echipa de specialisti în amenajari, punem la dispozitie cele mai
					calitative materiale si tehnologii pentru a asigura ca fiecare proiect
					devine o capodopera.
				</p>
			</div>

      <div className='w-1/2'>
				<MainButton
					href='/'
					text={'Vezi portofoliu'}
					className='bg-black text-white border-white flex justify-center'
				/>
			</div>
		</section>
	);
};
