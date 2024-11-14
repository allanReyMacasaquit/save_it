import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
	title: 'Save_it',
	description: 'Save it - One solution for saving files',
};

// Set up the Poppins font
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-poppins',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
