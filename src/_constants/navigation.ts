import { useTranslation } from '@/_i18n'
import { Link } from '@/_types/navigation'

export const getNavigation = async (lang: string) => {
	const { t } = await useTranslation(lang, 'navigation')

	return [
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
	] as Link[]
}
