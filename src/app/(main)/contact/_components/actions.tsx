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

	console.log('SUNT IN submitFormAction top level');
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: true,
			debug: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
		console.log('SUNT IN try');
		transporter.verify(function (error, success) {
			if (error) {
				console.log(error);
			} else {
				console.log('Server is ready to take our messages');
			}
		});
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			subject: 'FORMULAR WEBSITE - EMAIL NOU',
			text: `
            Nume: ${name}
            Email: ${email}
            Numar de telefon: ${phoneNumber}
            Mesaj: ${message}
            `,
		};
		console.log(mailOptions);

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
