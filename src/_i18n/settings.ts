export const defaultLang = 'cs'
export const languages = [defaultLang, 'en']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lang = defaultLang, ns = defaultNS) {
	return {
		supportedLngs: languages,
		defaultLng: defaultLang,
		lng: lang,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	}
}
