'use server';
import nodemailer from 'nodemailer';

type Fields = {
	name: string;
	email: string;
	phoneNumber: string;
	message: string;
};

export type FormState = {
	message: string;
	errors: Record<keyof Fields, string> | undefined;
	fieldValues: Fields;
};

export async function submitFormAction(
	prevState: FormState,
	formData: FormData
): Promise<FormState> {
	const name = formData.get('name');
	const email = formData.get('email');
	const phoneNumber = formData.get('phoneNumber') as string;
	const message = formData.get('message');

	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.NEXT_PUBLIC_EMAIL_USER,
				pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.NEXT_PUBLIC_EMAIL_USER,
			to: process.env.NEXT_PUBLIC_EMAIL_USER,
			subject: 'FORMULAR WEBSITE - EMAIL NOU',
			text: 
            `
            Nume: ${name}
            Email: ${email}
            Numar de telefon: ${phoneNumber}
            Mesaj: ${message}
            `,
		};

		transporter.sendMail(mailOptions, function (errorz, info) {
			if (errorz) {
				console.log(errorz);
			} else {
				console.log('Email Sent');
				return true;
			}
		});

		return {
			message: 'success',
			errors: undefined,
			fieldValues: {
				name: '',
				email: '',
				phoneNumber: '',
				message: '',
			},
		};
	} catch (error) {
		console.log('error here');
		return {
			message: 'error',
			errors: undefined,
			fieldValues: {
				name: '',
				email: '',
				phoneNumber: '',
				message: '',
			},
		};
	}
}
