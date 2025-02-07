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
			<h1 className='text-center font-oswald text-golden/60 leading-tight text-[4rem] sm:text-[6rem]'>
				O nás
			</h1>
			<h2 className='font-oswald'>Vítejte na našich stránkách </h2>

			<p className='max-w-4xl mt-5'>
				Venkovský styl bydlení v historickém domě s keramickou dílnou,
				kde se můžete na chvíli stát hrnčířem.
			</p>

			<div className='grid grid-cols-2 gap-y-4 md:grid-cols-4 w-full max-w-5xl mt-20'>
				<GridElement title='Ubytování v přírodě' link='/ubytovani'>
					<LeafIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></LeafIcon>
				</GridElement>
				<GridElement
					className='md:border-solid border-none'
					title='Horská turistika'
					link='/vylety-do-okoli'
				>
					<HikingIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></HikingIcon>
				</GridElement>

				<div
					className={`flex flex-col items-center  py-2 px-8  group border-golden/60 border-r`}
				>
					<FamilyIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></FamilyIcon>
					<p className='text-sm sm:text-base text-nowrap font-bold text-secondary text-center mt-4'>
						Rodinné zázemí
					</p>
				</div>

				<GridElement
					link='/keramicka-dilna'
					className='border-none'
					title='Keramická dílna'
				>
					<PotteryIcon className='h-12 sm:h-14 md:h-16 text-secondary group-hover:text-secondaryAccent duration-300'></PotteryIcon>
				</GridElement>
			</div>
		</section>
	)
}

export default About
