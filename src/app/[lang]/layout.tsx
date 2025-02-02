import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '@/_i18n/settings'
import { Open_Sans, Oswald } from 'next/font/google'
import './../globals.css'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'
import FooterEasterEgg from '@/_components/Footer/FooterEasterEgg'
import { getNavigation } from '@/_constants/navigation'
import { useTranslation } from '@/_i18n'

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

export default async function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) {
	const { t } = await useTranslation(lang, 'navigation')

	const links = [
		{
			link: `/`,
			text: t('home'),
		},
		{
			link: `/ubytovani`,
			text: t('accomodation'),
			submenu: [
				{
					link: `/ubytovani`,
					text: t('apartments'),
				},
				{
					link: `/ubytovani/maly-apartman`,
					text: t('studio'),
				},
				{
					link: `/ubytovani/velky-apartman`,
					text: t('big_apartment'),
				},
				{
					link: `/ubytovani/rezervace`,
					text: t('reservation'),
				},
			],
		},
		{
			link: `/keramicka-dilna`,
			text: t('pottery'),
		},
		{
			link: `/vylety-do-okoli`,
			text: t('places_to_visit'),
		},

		{
			link: `/blog`,
			text: t('blog'),
		},
		{
			link: `/kontakt`,
			text: t('contact'),
		},
	]

	return (
		<html lang={lang} dir={dir(lang)}>
			<body
				className={`${
					(openSans.className, oswald.variable)
				} flex flex-col items-center min-h-screen`}
			>
				<Navigation links={links}></Navigation>

				<main className='flex-1 w-full flex flex-col justify-start'>
					{children}
				</main>

				<FooterEasterEgg></FooterEasterEgg>
				<Footer></Footer>
			</body>
		</html>
	)
}
