import axios from 'axios'

export const igClient = axios.create({
	baseURL: process.env.IG_GRAPHQL_URL!,
	headers: { 'Content-Type': 'application/json' },
})

export const nextClient = axios.create({
	baseURL: '/api/v1',
	headers: { 'Content-Type': 'application/json' },
})
