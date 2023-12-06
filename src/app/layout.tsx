import type { Metadata } from 'next';
import './globals.css';
import { Header } from './_components/_globals/Header';
import { Footer } from './_components/_globals/Footer';

export const metadata: Metadata = {
	title: {
		default: 'Woodly',
		template: '%s | Woodly',
	},
	description: 'Amenajam locuri in care fiecare detaliu te inspira.',
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
