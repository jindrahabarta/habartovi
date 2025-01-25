import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: '%s | Ubytování a Keramická dílna Habartovi',
	description: 'Stránka',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='cs'>
			<body
				className={`${openSans.className} flex flex-col justify-between items-center min-h-screen`}
			>
				<Navigation></Navigation>

				<main className='flex-1 w-full'>{children}</main>

				<Footer></Footer>
			</body>
		</html>
	)
}
