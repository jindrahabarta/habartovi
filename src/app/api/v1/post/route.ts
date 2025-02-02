import { getPosts } from '@/_graphql/posts/getPosts'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10)
		const size = parseInt(req.nextUrl.searchParams.get('size') || '6', 10)

		const data = await getPosts(page, size)
		if (!data) {
			return NextResponse.json(null, { status: 404 })
		}

		return NextResponse.json(data, { status: 200 })
	} catch (e) {
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		)
	}
}
