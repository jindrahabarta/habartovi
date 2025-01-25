import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { defaultNS, getOptions } from './settings'

const initI18next = async (lang: string, namespace: string) => {
	const i18nInstance = createInstance()
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				(language: string, ns: string) =>
					import(`./locales/${language}/${ns}.json`)
			)
		)
		.init(getOptions(lang, namespace))
	return i18nInstance
}

export async function useTranslation(
	lang: string,
	ns: string = defaultNS,
	options: any = {}
) {
	const i18nextInstance = await initI18next(lang, ns)
	return {
		t: i18nextInstance.getFixedT(lang, ns, options.keyPrefix),
		i18n: i18nextInstance,
	}
}
