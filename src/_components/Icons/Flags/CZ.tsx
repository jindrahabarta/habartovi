import * as React from 'react'
import { SVGProps } from 'react'
const CZ = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fillRule='evenodd'
		clipRule='evenodd'
		imageRendering='optimizeQuality'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 51.28 35.67'
		{...props}
	>
		<g fillRule='nonzero'>
			<path
				fill='#D7141A'
				d='M51.28 17.84v15.01a2.83 2.83 0 0 1-2.82 2.82H2.82A2.83 2.83 0 0 1 0 32.85V17.84h51.28z'
			/>
			<path
				fill='#fff'
				d='M51.28 17.84H0V2.82A2.83 2.83 0 0 1 2.82 0h45.64a2.83 2.83 0 0 1 2.82 2.82v15.02z'
			/>
			<path
				fill='#11457E'
				d='M25.64 17.84.57 1.12C.21 1.6 0 2.18 0 2.82v30.03c0 .64.21 1.23.57 1.7l25.07-16.71z'
			/>
		</g>
	</svg>
)
export default CZ
