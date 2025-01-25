'use client'
import React, { useState } from 'react'
import CzechFlagIcon from '../Icons/CzechFlagIcon'
import GBFlagIcon from '../Icons/GBFlagIcon'

const LanguageSelector = () => {
	const [isOpen, setIsOpen] = useState(false)

	//https://github.com/simplelocalize/nextjs-tailwind-language-selector/blob/main/src/components/LanguageSelector.tsx
	return (
		<>
			<div className='flex items-center z-40'>
				<div className='relative inline-block text-left'>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='inline-flex gap-1 items-center justify-center w-full rounded-md  px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
							aria-haspopup='true'
							aria-expanded={isOpen}
						>
							<CzechFlagIcon className='w-5'></CzechFlagIcon>

							<svg
								className={` h-5 w-5  duration-200 ${
									isOpen && '-rotate-180'
								}`}
							>
								<path
									className='origin-center'
									fillRule='evenodd'
									d='M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
					{isOpen && (
						<div
							className='origin-top-right w-full absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='language-selector'
						>
							<div className='py-1 gap-2' role='none'>
								<button
									// onClick={() =>
									// 	handleLanguageChange(language)
									// }
									className={`w-full text-gray-700 px-2 py-2 text-sm text-left items-center inline-flex gap-2 hover:bg-gray-100 `}
									role='menuitem'
								>
									<GBFlagIcon className='w-5'></GBFlagIcon>
									<span>en</span>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default LanguageSelector
