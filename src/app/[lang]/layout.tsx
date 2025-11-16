import { dir } from 'i18next'
import { languages } from '@/_i18n/settings'
import { Open_Sans, Oswald } from 'next/font/google'
import './../globals.css'
import Navigation from '@/_components/Navigation/Navigation'
import Footer from '@/_components/Footer/Footer'
// import FooterEasterEgg from '@/_components/Footer/FooterEasterEgg'
import { getTranslation } from '@/_i18n'
import CookiesBar from '@/_components/CookiesBar/CookiesBar'
import CookiesBarProvider from '@/_components/CookiesBar/CookiesBarProvider'

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-oswald',
})

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'layout')

	return {
		title: {
			template: `%s | ${t('seo.template')}`,
			default: 'Úvod',
		},
		description: t('seo.description'),
		authors: [
			{
				name: 'MotionLabs',
				url: 'https://motionlabs.cz',
			},
		],
		keywords: [
			'Ubytování',
			'Ubytování Červená Voda',
			'Ubytování Moravský Karlov',
			'Ubytování Habartovi',
			'Keramika Červená Voda',
			'Keramika Moravský Karlov',
			'Keramika Habartovi',
			'Keramická dílna',
		],
		twitter: {
			card: 'summary_large_image',
		},
		icons: {
			icon: '/favicon.ico',
			apple: '/apple-touch-icon.png',
		},
		openGraph: {
			title: 'Ubytování a Keramická dílna Habartovi',
			description:
				'Vítejte na stránkách našeho Ubytování a Keramické dílny v Moravském Karlově, nedaleko Červené Vody. Lokalita nabízí mnoho sportovních příležitostí i oddychu.',
			images: [
				`https://raw.githubusercontent.com/motionlabs-git/habartovi/refs/heads/master/public/images/OpenGraphImage.webp`,
			],
		},
	}
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
	const { t } = await getTranslation(lang, 'navigation')

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

				<CookiesBarProvider lang={lang} />

				{/* <FooterEasterEgg></FooterEasterEgg> */}
				<Footer lang={lang}></Footer>
			</body>
		</html>
	)
}
