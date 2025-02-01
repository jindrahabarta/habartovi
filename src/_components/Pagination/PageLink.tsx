import Link from 'next/link'

const PageLink: React.FC<{
	href: string
	children?: string | number | JSX.Element | JSX.Element[]
	active?: boolean
}> = ({ href, children, active = false }) => {
	return (
		<Link
			href={href}
			className={`w-8 h-8 flex justify-center items-center rounded-md font-bold text-black ${
				active
					? 'bg-golden hover:bg-goldenAccent'
					: 'bg-secondary hover:bg-secondaryAccent'
			} duration-300`}
		>
			{children}
		</Link>
	)
}

export default PageLink
