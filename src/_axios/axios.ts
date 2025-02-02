import axios from 'axios'

export const igClient = axios.create({
	baseURL: process.env.IG_GRAPHQL_URL!,
	timeout: 3000,
	headers: { 'Content-Type': 'application/json' },
})

export const nextClient = axios.create({
	baseURL: '/api/v1',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
})
