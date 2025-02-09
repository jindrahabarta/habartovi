import { cookies, headers } from 'next/headers'
import acceptLanguage from 'accept-language'
import { cookieName, defaultLng, languages } from '@/_i18n/settings'
import { dir } from 'i18next'
import { Oswald } from 'next/font/google'
import './globals.css'

acceptLanguage.languages(languages)

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-oswald',
})

const NotFound = async () => {
	const HEADERS = await headers()
	const COOKIES = await cookies()

	let lang: string | null | undefined = languages.find((l) => {
		const referer = HEADERS.get('referer')
		if (!referer) return false
		return referer.startsWith(`/${l}`)
	})

	if (!lang && COOKIES.has(cookieName)) {
		lang = acceptLanguage.get(COOKIES.get(cookieName)!.value)
	}

	if (!lang) lang = acceptLanguage.get(HEADERS.get('Accept-Language'))
	if (!lang) lang = defaultLng

	return (
		<html lang={lang} dir={dir(lang)}>
			<body
				className={`${oswald.variable} w-screen h-screen flex flex-col items-center bg-background`}
			>
				<main className='w-full h-full flex items-center justify-center'>
					<h1 className='font-oswald text-[30vw] font-bold text-golden/60'>
						404 {lang}
					</h1>
				</main>
			</body>
		</html>
	)
}

export default NotFound
