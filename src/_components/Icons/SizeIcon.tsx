import * as React from 'react'
import { SVGProps } from 'react'
const SizeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		viewBox='0 0 122.88 122.88'
		fill='currentColor'
		{...props}
	>
		<path
			d='m0 122.88 1.01-51.25L17.18 87.8c15.42-15.43 17.1-17.11 32.53-32.53l17.9 17.91c-15.42 15.42-17.1 17.1-32.53 32.52l16.17 16.17L0 122.88zM122.88 0 71.62 1.01l16.17 16.17C72.37 32.6 70.69 34.29 55.27 49.71l17.9 17.91C88.6 52.2 90.28 50.51 105.7 35.09l16.17 16.18L122.88 0z'
			style={{
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			}}
		/>
	</svg>
)
export default SizeIcon
