import { getCategory } from '@/_graphql/categories/getCateogry'
import { NextRequest, NextResponse } from 'next/server'

interface IParams {
	slug: string
}

export async function GET(req: NextRequest, { params }: { params: IParams }) {
	try {
		const { slug } = params
		if (!slug || typeof slug !== 'string' || slug.length === 0) {
			return NextResponse.json(
				{ message: 'Invalid slug parameter' },
				{ status: 200 }
			)
		}

		const data = await getCategory(slug)
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
