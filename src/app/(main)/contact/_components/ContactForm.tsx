'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitFormAction } from './actions';

export const ContactForm = () => {
	const [formState, formAction] = useFormState(submitFormAction, {
		message: '',
		errors: undefined,
		fieldValues: {
			name: '',
			email: '',
			phoneNumber: '',
			message: '',
		},
	});

	const formRef = useRef<HTMLFormElement>(null);
	
	useEffect(() => {
		if (formState.message === 'success') {
			formRef.current?.reset();
		}
	}, [formState]);

	const FormButton = () => {
		const { pending } = useFormStatus();
		return (
			<button
				className='uppercase w-full bg-white text-center border font-medium text-xs py-3 px-3 max-w-[12.5rem] mobile:text-sm desktop:px-8'
				type='submit'
			>
				{pending ? 'Mesajul se trimite...' : 'Trimite'}
			</button>
		);
	};

	return (
		<>
			<form
				className='flex flex-col gap-6 desktop:max-w-[27rem]'
				action={formAction}
				ref={formRef}
				>
				<fieldset className=''>
					<legend className='absolute -left-96'>Scrie numele tau.</legend>
					<div className='flex flex-col'>
						<label className='absolute -left-96' htmlFor='name'>
							Nume <span aria-label='required'>*</span>
						</label>
						<input
							className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
							type='text'
							name='name'
							required
							placeholder='Nume'
						/>
					</div>
				</fieldset>

				<fieldset className=''>
					<legend className='absolute -left-96'>Introdu email-ul.</legend>
					<div className='flex flex-col'>
						<label className='absolute -left-96' htmlFor='email'>
							Email <span aria-label='required'>*</span>
						</label>
						<input
							className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
							type='email'
							name='email'
							required
							placeholder='Email'
						/>
					</div>
				</fieldset>

				<fieldset className=''>
					<legend className='absolute -left-96'>
						Introdu numarul de telefon.
					</legend>
					<div className='flex flex-col'>
						<label className='absolute -left-96' htmlFor='phoneNumber'>
							Numar de telefon <span aria-label='required'>*</span>
						</label>
						<input
							className='px-2 h-12 text-white border-solid border bg-transparent border-t-0 border-x-0 placeholder:uppercase placeholder:text-sm focus:outline-dashed focus:outline-gray-700'
							type='text'
							name='phoneNumber'
							required
							placeholder='Număr de telefon'
						/>
					</div>
				</fieldset>

				<fieldset className=''>
					<legend className='absolute -left-96 '>
						Mesajul tau pentru noi.
					</legend>
					<div className='flex flex-col'>
						<label className='absolute -left-96' htmlFor='message'>
							Mesajul tau pentru noi. <span aria-label='required'>*</span>
						</label>
						<textarea
							className='px-2 mt-4 text-white resize-none py-4 h-28 border-solid border-t-0 border-x-0 border bg-transparent focus:outline-dashed focus:outline-gray-700'
							name='message'
							required
							placeholder='Scrie mesajul tău.'
						/>
					</div>
				</fieldset>
				<div className='w-1/2 desktop:flex desktop:justify-start'>
					<FormButton />
				</div>
			</form>
		</>
	);
};
