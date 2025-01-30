import { StaticImageData } from 'next/image'
import React from 'react'
import Trip from './Trip'

interface props {
	trips: {
		title: string
		link: string
		desc: string
		img: StaticImageData
	}[]
}

const TripsGrid = ({ trips }: props) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
			{trips.map((trip, i) => (
				<React.Fragment key={i}>
					<Trip
						title={trip.title}
						link={trip.link}
						desc={trip.desc}
						img={trip.img}
					></Trip>
				</React.Fragment>
			))}
		</div>
	)
}

export default TripsGrid
