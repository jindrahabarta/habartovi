'use client'
import React, { useState } from 'react'

import GBFlagIcon from '../Icons/Flags/GB'
import { useParams, usePathname, useRouter } from 'next/navigation'
import GB from '../Icons/Flags/GB'
import CZ from '../Icons/Flags/CZ'
import PL from '../Icons/Flags/PL'
import DE from '../Icons/Flags/DE'

const languages: { [key: string]: JSX.Element } = {
	cs: <CZ className='w-5 rounded-sm shadow-sm'></CZ>,
	en: <GB className='w-5 rounded-sm shadow-sm'></GB>,
	de: <DE className='w-5 rounded-sm shadow-sm'></DE>,
	pl: <PL className='w-5 rounded-sm shadow-sm'></PL>,
}

const LanguageSelector = () => {
	const [isOpen, setIsOpen] = useState(false)

	const path = usePathname()
	const router = useRouter()
	const { lang } = useParams<{ lang: string }>()

	const handleLanguageChange = (e: React.MouseEvent, language: string) => {
		e.preventDefault()
		router.push(path.replace(lang, language))
	}

	return (
		<>
			<div className='flex items-center '>
				<div className='relative inline-block text-left'>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='inline-flex gap-1 items-center justify-center w-full rounded-md  px-2 py-2  text-sm font-medium text-gray-700  focus:outline-none'
							aria-haspopup='true'
							aria-expanded={isOpen}
						>
							{languages[lang]}

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
							className='origin-top-right w-full absolute right-0 mt-2 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='language-selector'
						>
							<div className='py-1 gap-2' role='none'>
								{Object.keys(languages).map((l) => {
									if (l !== lang) {
										return (
											<button
												key={l}
												onClick={(e) =>
													handleLanguageChange(e, l)
												}
												className={`w-full text-gray-700 px-2 py-2 text-sm text-left items-center inline-flex gap-2 hover:bg-backgroundAccent duration-300`}
												role='menuitem'
											>
												{languages[l]}
												<span className='uppercase'>
													{l}
												</span>
											</button>
										)
									}

									return null
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default LanguageSelector
