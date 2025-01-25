import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18init = () => {
	i18n.use(initReactI18next).init({
		resources: {
			en: { translation: { welcome: 'Welcome' } },
			cz: { translation: { welcome: 'Vítejte' } },
		},
		lng: 'en', // Výchozí jazyk
		fallbackLng: 'en', // Záložní jazyk
		interpolation: {
			escapeValue: false, // React už provádí escapování
		},
	})
}

export default i18init
