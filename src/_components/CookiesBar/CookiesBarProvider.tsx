import React from 'react'
import CookiesBar from './CookiesBar'
import { getTranslation } from '@/_i18n'

const CookiesBarProvider = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'cookieBar')

	return (
		<CookiesBar
			title={t('title')}
			description={t('text')}
			agree={t('agree')}
			disagree={t('disagree')}
		></CookiesBar>
	)
}

export default CookiesBarProvider
