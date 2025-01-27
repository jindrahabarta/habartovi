import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '@/_i18n/settings'
import { Open_Sans, Oswald } from 'next/font/google'
import './../globals.css'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-oswald',
})

export const metadata: Metadata = {
	title: {
		template: '%s | Ubytování a Keramická dílna Habartovi',
		default: 'Úvod',
	},
	description: 'Stránka',
}

export async function generateStaticParams() {
	return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) {
	return (
		<html lang={lang} dir={dir(lang)}>
			<body
				className={`${
					(openSans.className, oswald.variable)
				} flex flex-col items-center min-h-screen`}
			>
				<Navigation></Navigation>

				<main className='flex-1 w-full flex flex-col justify-start'>
					{children}
				</main>

				<Footer></Footer>
			</body>
		</html>
	)
}
