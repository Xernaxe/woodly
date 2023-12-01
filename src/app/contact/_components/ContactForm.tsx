import React from 'react';

export const ContactForm = () => {
	return (
		<form className='flex flex-col gap-6 desktop:max-w-[27rem]'>
			<fieldset className=''>
				<legend className='absolute -left-96'>Scrie numele tau.</legend>
				<div className='flex flex-col'>
					<label className='absolute -left-96' htmlFor='Name'>
						Nume <span aria-label='required'>*</span>
					</label>
					<input
						className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
						type='text'
						name='Nume'
						required
						placeholder='Nume'
					/>
				</div>
			</fieldset>

			<fieldset className=''>
				<legend className='absolute -left-96'>Type in your email.</legend>
				<div className='flex flex-col'>
					<label className='absolute -left-96' htmlFor='Email'>
						Email <span aria-label='required'>*</span>
					</label>
					<input
						className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
						type='email'
						name='Email'
						required
						placeholder='Email'
					/>
				</div>
			</fieldset>

			<fieldset className=''>
				<legend className='absolute -left-96'>Type in your name.</legend>
				<div className='flex flex-col'>
					<label className='absolute -left-96' htmlFor='Name'>
						Name <span aria-label='required'>*</span>
					</label>
					<input
						className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
						type='text'
						name='Name'
						required
						placeholder='Name'
					/>
				</div>
			</fieldset>

			<fieldset className=''>
				<legend className='absolute -left-96 '>Your message to us.</legend>
				<div className='flex flex-col'>
					<label className='absolute -left-96' htmlFor='Message'>
						Message <span aria-label='required'>*</span>
					</label>
					<textarea
						className='px-2 mt-4 text-white resize-none py-4 h-28 border-solid border-t-0 border-x-0 border bg-transparent focus:outline-dashed focus:outline-gray-700'
						name='Message'
						required
						placeholder='Write your message'
					/>
				</div>
			</fieldset>
			<div className='w-1/2 desktop:flex desktop:justify-start'>
				<button className='uppercase w-full bg-white text-center border font-medium text-xs py-3 px-3 max-w-[12.5rem] mobile:text-sm desktop:px-8' type='submit'>Trimite</button>
			</div>
		</form>
	);
};
