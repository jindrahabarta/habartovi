import axios from 'axios'

export const igClient = axios.create({
	baseURL: process.env.IG_GRAPHQL_URL!,
	timeout: 3000,
	headers: { 'Content-Type': 'application/json' },
})
