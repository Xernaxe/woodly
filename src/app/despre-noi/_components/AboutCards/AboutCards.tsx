import Image from 'next/image';
import React from 'react';

export const AboutCards = () => {
	return (
		<section className='section gap-6'>
			<div className='flex flex-col-reverse gap-2'>
				<div className=''>
					<p className=''>
						Woodly este o companie de design interior de prim plan specializată
						în transformarea completă a apartamentului dumneavoastră. Oferim o
						gamă largă de soluții interioare atât clasice, cât și moderne,
						create cu meticulozitate în Germania și adaptate perfect spațiului
						dumneavoastră locativ.
					</p>
					<p className=''>
						Showroom-ul nostru din București, funcționează cu o echipă bine
						sudată care a supervizat proiectarea și instalarea a numeroase
						renovări de apartamente. Fiecare membru al echipei noastre este
						profund dedicat muncii lor, asigurându-se că fiecare proiect este
						abordat cu devotament și grijă.
					</p>
				</div>

				<div className='relative top-0 left-0 w-full h-[90vw]'>
					<Image
						src={'/aboutCard_1.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>

			<div className='flex flex-col-reverse gap-2'>
				<div className=''>
					<p className=''>
						În plus față de valorile noastre de bază, profesionalismul,
						punctualitatea și încrederea, vă oferim trei garanții fundamentale:
					</p>
					<p className=''>
						Woodly asigură că oferta noastră rămâne cea mai competitivă de pe
						piață. Dacă primiți o ofertă cu un preț mai mic pentru soluții
						interioare de calitate similară, o vom egaliza sau chiar o vom bate.
						Este important de menționat că pachetele noastre standard includ
						adesea accesorii pe care alții le oferă ca opțiuni suplimentare la
						un cost adițional.
					</p>
				</div>

				<div className='relative top-0 left-0 w-full h-[90vw]'>
					<Image
						src={'/aboutCard_2.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>

			<div className='flex flex-col-reverse gap-2'>
				<div className=''>
					<p className=''>
						La Woodly, oferim servicii cuprinzătoare și profesionale. Fiecare
						clientprimește cea mai mare atenție și grijă. Vom fi partenerul
						dumneavoastră de încredere pe întreg parcursul proiectului de
						transformare a apartamentului, permițându-vă să vă concentrați
						asupra a ceea ce contează cu adevărat.
					</p>
					<p className=''>
						Toate produsele noastre sunt fabricate în Germania și vin cu o
						garanție de 5 ani. Procesul nostru de producție automatizat,
						controlul calității de la furnizorii furnizorilor și cele 50 de
						puncte de verificare din timpul procesului de producție sunt toate
						dovezi ale calității în care credem.
					</p>
				</div>

				<div className='relative top-0 left-0 w-full h-[90vw]'>
					<Image
						src={'/aboutCard_3.png'}
						alt={'@TODO'}
						fill
						className='object-cover'
					/>
				</div>
			</div>
		</section>
	);
};
