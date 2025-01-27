export interface IPost {
	id: string
	slug: string
	title: string
	date: string
	featuredImage: {
		node: {
			mediaItemUrl: string
		}
	} | null
	blog: {
		introduction: string | null
	}
}

export const postAttributes = `
    id
    slug
    title
    date
    featuredImage {
        node {
            mediaItemUrl
        }
    }
    blog {
        introduction
    }
`
