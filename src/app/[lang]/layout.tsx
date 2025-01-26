import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '@/_i18n/settings'
import { Open_Sans } from 'next/font/google'
import './../globals.css'
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
				className={`${openSans.className} flex flex-col justify-between items-center min-h-screen`}
			>
				<Navigation></Navigation>

				<main className='flex-1 w-full'>{children}</main>

				<Footer></Footer>
			</body>
		</html>
	)
}
