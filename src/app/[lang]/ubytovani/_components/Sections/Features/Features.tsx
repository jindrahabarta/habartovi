import React from 'react'
import Feature from './Feature'

const Features = ({
	features,
}: {
	features: {
		text: string
		icon: React.JSX.Element
	}[]
}) => {
	return (
		<>
			<h2 className='font-oswald opacity-50 text-4xl leading-tight text-golden'>
				Služby
			</h2>

			<div className='mt-5 grid sm:grid-cols-2 gap-4'>
				{features.map((feature, i) => (
					<React.Fragment key={i}>
						<Feature
							title={feature.text}
							icon={feature.icon}
						></Feature>
					</React.Fragment>
				))}
			</div>
		</>
	)
}

export default Features
