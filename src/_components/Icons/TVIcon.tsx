import * as React from 'react'
import { SVGProps } from 'react'
const TVIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		className='feather feather-tv'
		{...props}
	>
		<rect width={20} height={15} x={2} y={7} rx={2} ry={2} />
		<path d='m17 2-5 5-5-5' />
	</svg>
)
export default TVIcon
