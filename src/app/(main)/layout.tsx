import type { Metadata } from 'next';
import './globals.css';
import { Header } from './_components/_globals/Header';
import { Footer } from './_components/_globals/Footer';

export const metadata: Metadata = {
	title: {
		default: 'Woodly',
		template: '%s | Woodly',
	},
	metadataBase: new URL('https://woodly.vercel.app'),
	alternates: {
		canonical: '/',
		languages: {
			'ro-RO': '/'
		}
	},
	description: 'Amenajam locuri in care fiecare detaliu te inspira.',
	openGraph: {
		type: 'website',
		url: new URL('https://woodly.vercel.app'),
		title: 'Woodly',
		description: 'Amenajam locuri in care fiecare detaliu te inspira.',
		siteName: 'Woodly',
		locale: 'ro-RO',
		images: [
			{url: '/websitePreview.png'}
		]
	}
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ro'>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
