import FamilyIcon from '@/_components/Icons/Features/FamilyIcon'
import HikingIcon from '@/_components/Icons/Features/HikingIcon'
import LeafIcon from '@/_components/Icons/Features/LeafIcon'
import PotteryIcon from '@/_components/Icons/Features/PotteryIcon'
import React from 'react'
import GridElement from './GridElement'

const About = () => {
	return (
		<section
			id='o-nas'
			className='container py-10 sm:h-screen h-fit flex flex-col justify-center items-center'
		>
			<h1 className='text-center  text-golden/50 leading-tight text-[5rem] sm:text-[7rem]'>
				O nás
			</h1>
			<h2 className='font-oswald'>Vítejte na našich stránkách </h2>

			<p className='max-w-4xl mt-5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
				omnis inventore placeat, voluptatum illum eveniet odit adipisci
				beatae voluptates, animi ullam soluta impedit, delectus culpa
				quisquam excepturi reiciendis minima a!
			</p>

			<div className='grid grid-cols-2 gap-y-4 md:grid-cols-4 w-full max-w-5xl mt-20'>
				<GridElement title='Ubytování v přírodě'>
					<LeafIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></LeafIcon>
				</GridElement>
				<GridElement
					className='md:border-solid border-none'
					title='Horská turistika'
				>
					<HikingIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></HikingIcon>
				</GridElement>
				<GridElement title='Rodinné zázemí'>
					<FamilyIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></FamilyIcon>
				</GridElement>
				<GridElement className='border-none' title='Keramická dílna'>
					<PotteryIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></PotteryIcon>
				</GridElement>
			</div>
		</section>
	)
}

export default About
