export interface IInstagramPost {
	id: string
	caption: string
	media_url: string
	permalink: string
	media_type: MediaType
}

export enum MediaType {
	CAROUSEL_ALBUM = 'CAROUSEL_ALBUM',
	IMAGE = 'IMAGE',
	VIDEO = 'VIDEO',
}
