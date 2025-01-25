import React from 'react'

const About = () => {
	return (
		<section id='about' className='flex'>
			<div className='relative flex-1 flex flex-col items-center gap-4 p-10'>
				<div
					id='aboutVerticalLine'
					className='absolute h-0 w-[0.5px] bg-black top-0 right-0'
				></div>
				<div
					id='aboutHorizontalLine'
					className='absolute w-0 h-[1px] bg-black bottom-0 right-0'
				></div>

				<div className='aboutContent opacity-0 w-32 aspect-square bg-gray-500 rounded-full'></div>
				<h2 className='aboutContent opacity-0'>Zdeněk</h2>
				<p className='max-w-96 aboutContent opacity-0'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
					error aut facilis! Aspernatur non architecto vitae, labore
					consectetur ipsam quae molestias unde fugit aliquam magnam
					provident dolorem nostrum velit? Soluta!
				</p>
			</div>

			<div className='relative flex-1 flex flex-col items-center gap-4 p-10'>
				<div
					id='aboutHorizontalLine'
					className='absolute w-0 h-[1px] bg-black bottom-0 left-0'
				></div>

				<div className='aboutContent opacity-0 w-32 aspect-square bg-gray-500 rounded-full'></div>
				<h2 className='aboutContent opacity-0'>Helena</h2>
				<p className='aboutContent opacity-0 max-w-96'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
					error aut facilis! Aspernatur non architecto vitae, labore
					consectetur ipsam quae molestias unde fugit aliquam magnam
					provident dolorem nostrum velit? Soluta!
				</p>
			</div>
		</section>
	)
}

export default About
