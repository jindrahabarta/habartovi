import { getInstagramPotteryPosts } from '@/_axios/instagram/getInstagramPosts'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const data = await getInstagramPotteryPosts()

		if (!data || data.length === 0) {
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
