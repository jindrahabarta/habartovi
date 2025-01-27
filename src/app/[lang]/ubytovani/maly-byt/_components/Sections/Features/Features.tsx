import React from 'react'
import Feature from './Feature'

const Features = () => {
	return (
		<>
			<h2 className='font-oswald opacity-50 text-4xl leading-tight text-golden'>
				Features
			</h2>

			<div className='mt-5 grid grid-cols-2 gap-4'>
				<Feature title='30 m2'></Feature>
				<Feature title='20 lůžek'></Feature>
				<Feature title='20 lůžek'></Feature>
				<Feature title='20 lůžek'></Feature>
				<Feature title='20 lůžek'></Feature>
			</div>
		</>
	)
}

export default Features
