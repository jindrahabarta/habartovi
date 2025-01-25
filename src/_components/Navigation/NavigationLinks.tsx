import React from 'react'
import NavLink from './NavLink'
import ChevronIcon from '../Icons/ChevronIcon'
import { Link } from '@/_types/navigation'

const NavigationLinks = ({ links }: { links: Link[] }) => {
	return (
		<div id='navUl' className='md:flex items-center gap-4 h-20 hidden'>
			<ul className='flex items-center gap-4 h-full'>
				{links.map((link, i) => {
					if (link.submenu) {
						return (
							<React.Fragment key={i}>
								<div className='group/subMenu h-full flex relative'>
									<div className='flex items-center gap-1 cursor-pointer'>
										<NavLink
											link={link.link}
											text={link.text}
										></NavLink>
										<ChevronIcon className='w-3 group-hover/subMenu:text-secondary group-hover/subMenu:pt-1 duration-200'></ChevronIcon>
									</div>

									<div className='absolute -left-2 -bottom-0 pt-0 translate-y-full opacity-0 pointer-events-none group-hover/subMenu:opacity-100 group-hover/subMenu:pointer-events-auto duration-300'>
										<div className=' flex flex-col gap-1  bg-background shadow-md border border-black/20 p-5 '>
											{link.submenu.map((subLink, i) => (
												<React.Fragment key={i}>
													<NavLink
														link={subLink.link}
														text={subLink.text}
													/>
												</React.Fragment>
											))}
										</div>
									</div>
								</div>
							</React.Fragment>
						)
					} else {
						return (
							<React.Fragment key={i}>
								<NavLink
									link={link.link}
									text={link.text}
								></NavLink>
							</React.Fragment>
						)
					}
				})}
			</ul>
		</div>
	)
}

export default NavigationLinks
