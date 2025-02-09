import { MetadataRoute } from 'next'
import moment from 'moment'
import { languages as langs } from '@/_i18n/settings'
import { ArrayElement } from '@/_types/helpers/arrayElement'
import { getCategories } from '@/_graphql/categories/getCategories'
import { getPosts } from '@/_graphql/posts/getPosts'

function getAlternatesConfig(url: string, path: string) {
	let languages: { [key: string]: string } = {}
	for (let i = 0; i < langs.length; i++) {
		languages[langs[i]] = `${url}/${langs[i]}${path}`
	}
	return {
		languages,
	}
}

function getSiteConfig(
	url: string,
	path: string,
	priority: number = 1
): ArrayElement<MetadataRoute.Sitemap> {
	return {
		url: `${url}/cs${path}`,
		lastModified: moment('2025-02-07', 'YYYY-MM-DD').toDate(),
		changeFrequency: 'monthly',
		priority,
		alternates: getAlternatesConfig(url, path),
	}
}

export default async function sitemap() {
	const BASE_URL = 'https://habartovi.cz'

	const map: MetadataRoute.Sitemap = [
		getSiteConfig(BASE_URL, ''),

		getSiteConfig(BASE_URL, '/ubytovani'),
		getSiteConfig(BASE_URL, '/ubytovani/maly-apartman'),
		getSiteConfig(BASE_URL, '/ubytovani/velky-apartman'),
		getSiteConfig(BASE_URL, '/ubytovani/rezervace'),

		getSiteConfig(BASE_URL, '/keramicka-dilna'),

		getSiteConfig(BASE_URL, '/vylety-do-okoli'),

		getSiteConfig(BASE_URL, '/blog'),

		getSiteConfig(BASE_URL, '/kontakt'),
	]

	const posts = await getPosts(1, 100)
	if (posts) {
		for (let i = 0; i < posts.nodes.length; i++) {
			map.push(
				getSiteConfig(BASE_URL, `/blog/${posts.nodes[i].slug}`, 0.8)
			)
		}
	}

	const categories = await getCategories()
	if (categories) {
		for (let i = 0; i < categories.nodes.length; i++) {
			map.push(
				getSiteConfig(
					BASE_URL,
					`/blog/rubriky/${categories.nodes[i].slug}`,
					0.6
				)
			)
		}
	}

	return map
}
