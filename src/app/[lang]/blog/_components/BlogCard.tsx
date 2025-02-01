import Link from 'next/link'
import Image from 'next/image'
import { IPost } from '@/_graphql/posts/post.interface'
import moment from 'moment'

import ImgPlaceholder from '@/../public/images/BlogPlaceholderImage.webp'

const BlogCard: React.FC<{ lang: string; post: IPost }> = ({ lang, post }) => {
	return (
		<li key={post.id} className='w-full h-full blogCard opacity-0'>
			<Link href={`/${lang}/blog/${post.slug}`}>
				<article className='w-full h-full flex flex-col border border-black/10 shadow-md rounded-lg overflow-hidden group'>
					<section className='overflow-hidden'>
						{post.featuredImage ? (
							<Image
								src={post.featuredImage.node.mediaItemUrl}
								alt={post.title}
								width={712}
								height={400}
								className='w-full aspect-video object-cover group-hover:scale-105 duration-300'
							/>
						) : (
							<div className='w-full flex justify-center items-center aspect-video object-cover border-b border-b-black/10'>
								<Image
									src={ImgPlaceholder}
									alt={post.title}
									width={300}
									height={300}
									className='w-1/2 aspect-square object-cover group-hover:scale-105 duration-300'
								/>
							</div>
						)}
					</section>

					<section className='flex-1 py-6 px-4'>
						<h2 className='font-oswald text-opacity-60 text-3xl leading-tight text-golden'>
							{post.title}
						</h2>
						<time className='text-gray-400 italic text-sm mt-2'>
							{moment(post.date).format('DD. MM. YYYY')}
						</time>
						{post.blog.introduction && (
							<p className='text-black line-clamp-4 mt-4'>
								{post.blog.introduction}
							</p>
						)}
					</section>
				</article>
			</Link>
		</li>
	)
}

export default BlogCard
