import React from 'react'

const Pricelist = () => {
	return (
		<>
			<h2 className='font-oswald opacity-50 text-4xl leading-tight text-golden'>
				Ceník
			</h2>

			<div className='mt-5'>
				<ul className=' list-disc pl-8'>
					<li>
						350,- Kč za osobu/noc v letní sezóně 1.5.-31.10.
						maximální počet osob je 5.
					</li>
					<li>350,- Kč za osobu/noc v zimní sezóně 1.11.-30.4.</li>
					<li>50,-Kč za jednoho psa a noc.</li>
				</ul>

				<p className='mt-4'>
					Ceny platí celoročně. Rekreační poplatek v obci Červená Voda
					činí 10,- Kč na jednu noc pro osobu starší 18 let.
				</p>
			</div>
		</>
	)
}

export default Pricelist
