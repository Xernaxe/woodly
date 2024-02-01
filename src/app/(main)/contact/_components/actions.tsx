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
	// get form details
	const name = formData.get('name');
	const email = formData.get('email');
	const phoneNumber = formData.get('phoneNumber') as string;
	const message = formData.get('message');

	// configure transporter
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		secure: true,
		port: 465,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	// verify connection configuration
	await new Promise((resolve, reject) => {
		transporter.verify(function (error, success) {
			if (error) {
				reject(error);
			} else {
				resolve(success);
			}
		});
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

	await new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, function (errorz, info) {
			if (errorz) {
				reject(errorz);
			} else {
				resolve(true);
			}
		});
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
}
