import FamilyIcon from '@/_components/Icons/Features/FamilyIcon'
import HikingIcon from '@/_components/Icons/Features/HikingIcon'
import LeafIcon from '@/_components/Icons/Features/LeafIcon'
import PotteryIcon from '@/_components/Icons/Features/PotteryIcon'
import React from 'react'

const About = () => {
	return (
		<section
			id='o-nas'
			className='h-screen flex flex-col justify-center items-center'
		>
			<h1 className='text-center  text-golden/20 text-[7rem]'>O nás</h1>
			<h2 className='font-oswald'>Vítejte na našich stránkách </h2>

			<p className='max-w-4xl mt-5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
				omnis inventore placeat, voluptatum illum eveniet odit adipisci
				beatae voluptates, animi ullam soluta impedit, delectus culpa
				quisquam excepturi reiciendis minima a!
			</p>

			<div className='grid grid-cols-4 w-full max-w-6xl mt-20'>
				<div className='flex flex-col items-center border-r py-4 px-8 border-golden/60 group'>
					<LeafIcon className='h-16 text-secondary/40 group-hover:text-secondaryAccent duration-300'></LeafIcon>
					<p className='text-base font-bold text-secondary text-center mt-4'>
						Ubytování v přírodě
					</p>
				</div>
				<div className='flex flex-col items-center border-r py-4 px-8 border-golden/60 group'>
					<HikingIcon className='h-16 text-secondary/40 group-hover:text-secondaryAccent duration-300'></HikingIcon>
					<p className='text-base font-bold text-secondary text-center mt-4'>
						Horská turistika
					</p>
				</div>
				<div className='flex flex-col items-center border-r py-4 px-8 border-golden/60 group'>
					<FamilyIcon className='h-16 text-secondary/40 group-hover:text-secondaryAccent duration-300'></FamilyIcon>
					<p className='text-base font-bold text-secondary text-center mt-4'>
						Rodinné zázemí
					</p>
				</div>
				<div className='flex flex-col items-center border-r py-4 px-8 border-golden/60 group'>
					<PotteryIcon className='h-16 text-secondary/40 group-hover:text-secondaryAccent duration-300'></PotteryIcon>
					<p className='text-base font-bold text-secondary text-center mt-4'>
						Keramická dílna
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
