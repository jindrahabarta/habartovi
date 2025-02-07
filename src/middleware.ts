import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { cookieName, defaultLng, languages } from '@/_i18n/settings'

acceptLanguage.languages(languages)

export const config = {
	// matcher: '/:lng*',
	matcher: [
		'/((?!api|sitemap|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
	],
}

export function middleware(req: NextRequest) {
	// URL
	let lang: string | null | undefined = languages.find((l) =>
		req.nextUrl.pathname.startsWith(`/${l}`)
	)
	if (!lang && req.cookies.has(cookieName)) {
		lang = acceptLanguage.get(req.cookies.get(cookieName)!.value)
	}
	if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
	if (!lang) lang = defaultLng

	// Redirect if lng in path is not supported
	if (
		!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
		!req.nextUrl.pathname.startsWith('/_next')
	) {
		return NextResponse.redirect(
			new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
		)
	}

	const response = NextResponse.next()
	if (languages.some((l) => l === lang))
		response.cookies.set(cookieName, lang)
	else response.cookies.set(cookieName, defaultLng)

	return response
}
