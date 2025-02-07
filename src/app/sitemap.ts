import { MetadataRoute } from 'next'
import moment from 'moment'
import { languages as langs } from '@/_i18n/settings'
import { ArrayElement } from '@/_types/helpers/arrayElement'
import { getCategories } from '@/_graphql/categories/getCategories'
import { getPosts } from '@/_graphql/posts/getPosts'

function getAlternatesConfig(url: string) {
	let languages: { [key: string]: string } = {}
	for (let i = 0; i < langs.length; i++) {
		languages[langs[i]] = `/${langs[i]}${url}`
	}
	return {
		languages,
	}
}

function getSiteConfig(
	url: string,
	priority: number = 10
): ArrayElement<MetadataRoute.Sitemap> {
	return {
		url,
		lastModified: moment('2025-02-07', 'YYYY-MM-DD').toDate(),
		changeFrequency: 'monthly',
		priority,
		alternates: getAlternatesConfig(url),
	}
}

export default async function sitemap() {
	const map: MetadataRoute.Sitemap = [
		getSiteConfig('/'),

		getSiteConfig('/ubytovani'),
		getSiteConfig('/ubytovani/maly-apartman'),
		getSiteConfig('/ubytovani/velky-apartman'),
		getSiteConfig('/ubytovani/rezervace'),

		getSiteConfig('/keramicka-dilna'),

		getSiteConfig('/vylety-do-okoli'),

		getSiteConfig('/blog'),

		getSiteConfig('/kontakt'),
	]

	const posts = await getPosts(1, 100)
	if (posts) {
		console.log(posts.nodes.map((p) => p.slug))
		for (let i = 0; i < posts.nodes.length; i++) {
			map.push(getSiteConfig(`/blog/${posts.nodes[i].slug}`, 8))
		}
	}

	const categories = await getCategories()
	if (categories) {
		for (let i = 0; i < categories.nodes.length; i++) {
			map.push(
				getSiteConfig(`/blog/rubriky/${categories.nodes[i].slug}`, 6)
			)
		}
	}

	return map
}
