import React from 'react'

interface IProps {
	lang: string
}

const OrderForm: React.FC<IProps> = ({ lang }) => {
	return (
		<iframe
			title='Reservation form'
			id='embed-4pKpEM_bOPm67oIBNWVPI'
			src={`https://${
				lang === 'cs' ? 'www' : lang
			}.megaubytko.cz/embed/booking?id=embed-4pKpEM_bOPm67oIBNWVPI&amp;accommodationId=8116&amp;token=4f03dee24d9dcfadc8403440fbfffef7&amp;primary_color=rgba%28166%2C179%2C125%2C1%29&amp;secondary_color=%23f0a559&amp;background_color=rgba%28255%2C255%2C255%2C1%29&amp;text_color=rgba%2824%2C29%2C34%2C1%29`}
			width='100%'
			height='900px'
			scrolling='no'
			className='mt-10'
		></iframe>
	)
}

export default OrderForm
