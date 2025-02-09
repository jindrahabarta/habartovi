import { cookies, headers } from 'next/headers'
import acceptLanguage from 'accept-language'
import { cookieName, defaultLng, languages } from '@/_i18n/settings'
import { dir } from 'i18next'
import { Oswald } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import NotFoundImage from '@/../public/images/404.png'
import { getTranslation } from '@/_i18n'

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

	const { t } = await getTranslation(lang, 'notFound')

	return (
		<html lang={lang} dir={dir(lang)}>
			<body
				className={`${oswald.variable} w-screen h-screen flex flex-col items-center bg-background`}
			>
				<main className='h-full flex items-center justify-center'>
					<div className='container flex flex-col items-center justify-center'>
						<section className='relative w-4/5 max-w-[30rem] aspect-square'>
							<div className='absolute top-[10%] w-full h-1/2 bg-white rounded-t-full' />
							<h1 className='absolute left-[-8%] top-[5%] sm:top-[0] font-oswald text-golden/60 text-[clamp(3rem,22vw,8rem)] -rotate-30'>
								404
							</h1>
							<Image
								src={NotFoundImage}
								alt={'404'}
								width={600}
								height={600}
								className='relative'
							/>
						</section>
						<section className='flex-1 lg:flex-auto px-8'>
							<h2 className='font-oswald text-[clamp(2rem,8vw,3rem)] text-golden/60'>
								{t('title')}
							</h2>
							<p className='mt-6'>{t('subTitle')}</p>
							<p className='mt-2'>
								{t('backTo')}
								<a
									href='/'
									className='inline-flex items-center w-fit font-semibold text-base group hover:underline'
								>
									{t('link')}
								</a>
								.
							</p>
						</section>
					</div>
				</main>
			</body>
		</html>
	)
}

export default NotFound
