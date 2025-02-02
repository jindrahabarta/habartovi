import { Metadata } from 'next'
import React from 'react'
import ContactTable from './_components/ContactTable'

export const metadata: Metadata = {
	title: 'Kontakt',
}

const Kontakt = () => {
	return (
		<div className='pt-32'>
			<section className='container'>
				<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60'>
					Kontakt
				</h1>

				<ContactTable></ContactTable>
			</section>
		</div>
	)
}

export default Kontakt
