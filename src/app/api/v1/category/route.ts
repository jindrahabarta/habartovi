import { getCategories } from '@/_graphql/categories/getCategories'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
	try {
		const data = await getCategories()
		if (!data) {
			return NextResponse.json([], { status: 404 })
		}

		return NextResponse.json(data.nodes, { status: 200 })
	} catch (e) {
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		)
	}
}
