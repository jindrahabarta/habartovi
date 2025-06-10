'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const CookiesBar = ({ lang }: { lang: string }) => {
	const [isAgreed, setIsAgreed] = useState<null | boolean>()



	useEffect(() => {
		const cookies = localStorage.getItem('cookies')


		if (cookies === null) {
			setIsAgreed(cookies)
		}

		if (cookies === 'disagreed') {
			setIsAgreed(false)
		}

		if (cookies === 'agreed') {
			setIsAgreed(true)
		}
	}, [])

	const agreeCookies = () => {
		setIsAgreed(true)

		localStorage.setItem('cookies', 'agreed')
	}

	const disagreeCookies = () => {
		setIsAgreed(false)
		localStorage.setItem('cookies', 'disagreed')
	}

	return (
		<aside className='fixed bottom-4 px-4 sm:px-0 sm:right-4'>
			{isAgreed && (
				<>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-2SLM1143CC'
						strategy='afterInteractive'
					/>
					<Script id='google-analytics' strategy='afterInteractive'>
						{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-2SLM1143CC');
                        `}
					</Script>
				</>
			)}

			{typeof isAgreed !== 'boolean' && (
				<div
					id='cookiesBar'
					className='opacity-0 w-full sm:w-96 h-full p-4 bg-green1/70 backdrop-blur-sm border border-black/80'
				>
					<h3 className='font-oswald text-2xl leading-tight text-golden opacity-60'>
						Nastavení cookies
					</h3>
					<p className='text-white pt-2'>
						Naše webové stránky používají soubory cookies pro
						analýzu návštěvnosti a zjištění zdroje návštěvnosti.
					</p>

					<div className='flex gap-4 mt-4 flex-wrap'>
						<button
							onClick={agreeCookies}
							className={`bg-golden border-2 border-golden py-3 px-4 sm:py-3 sm:px-4 inline-block font-bold duration-200 hover:bg-goldenAccent hover:border-goldenAccent shadow-md text-sm text-white`}
						>
							Souhlasím
						</button>
						<button
							onClick={disagreeCookies}
							className={`bg-transparent border-2 border-golden py-3 px-4  sm:py-3 sm:px-4 inline-block font-bold duration-200 shadow-md text-sm text-white hover:bg-goldenAccent `}
						>
							Nesouhlasím
						</button>
					</div>
				</div>
			)}
		</aside>
	)
}

export default CookiesBar
