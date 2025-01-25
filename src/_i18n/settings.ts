export const defaultLng = 'cs'
export const languages = [defaultLng, 'en']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = defaultLng, ns = defaultNS) {
	return {
		supportedLngs: languages,
		defaultLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	}
}
