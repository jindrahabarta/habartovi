import { getInstagramPotteryPosts } from '@/_axios/instagram/getInstagramPosts'
import InstagramCarousel from '@/app/_components/Carousel/InstagramCarousel'
import Button from '../Buttons/Button'

const InstagramPottery = async () => {
	const instagramPosts = await getInstagramPotteryPosts()

	return (
		<section className='py-20 container'>
			<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
				Instagram
			</h2>
			{instagramPosts && (
				<InstagramCarousel instagramPosts={instagramPosts} />
			)}
			<div className='flex justify-center'>
				<Button
					className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
					link={'https://www.instagram.com/helenpottery/'}
					target='_blank'
					text={'Sledujte nás'}
				></Button>
			</div>
		</section>
	)
}

export default InstagramPottery
