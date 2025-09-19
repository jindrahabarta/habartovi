import React from 'react'

const HamburgerButton = ({
	isOpened,
	handleClick,
}: {
	isOpened: boolean
	handleClick: () => void
}) => {
	return (
		<button
			type='button'
			onClick={handleClick}
			aria-label='Otevírání mobilního menu'
			className='w-12 h-12 px-2 relative z-50 lg:hidden flex flex-col justify-center items-center gap-[7px] bg-secondary rounded-lg'
		>
			<div
				className={` h-0.5 bg-white rounded-full duration-200 ${
					isOpened ? 'w-0' : 'w-full'
				}`}
			></div>
			<div
				className={` h-0.5 bg-white rounded-full duration-200 delay-75 ${
					isOpened ? 'w-0' : 'w-full'
				}`}
			></div>
			<div
				className={` h-0.5 bg-white rounded-full duration-200 delay-150 ${
					isOpened ? 'w-0' : 'w-full'
				}`}
			></div>

			<div
				className={`${
					isOpened ? 'w-8 delay-200' : 'w-0 '
				} duration-200  h-0.5 bg-white rounded-full absolute rotate-45`}
			></div>
			<div
				className={`${
					isOpened ? 'w-8 delay-200' : 'w-0 '
				} duration-200 h-0.5 bg-white rounded-full absolute -rotate-45`}
			></div>
		</button>
	)
}

export default HamburgerButton
