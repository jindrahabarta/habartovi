import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapInit = (path: string) => {
	ScrollTrigger.killAll()
	gsap.registerPlugin(ScrollTrigger)

	if (path === '/') {
		const aboutTl = gsap.timeline({
			defaults: {
				duration: 0.5,
				ease: 'power1.inOut',
			},
			scrollTrigger: {
				trigger: '#about',
				start: 'top center',
				end: 'bottom center',
				toggleActions: 'play none none none',
			},
		})

		aboutTl
			.to('#aboutVerticalLine', {
				height: '100%',
			})
			.to('#aboutHorizontalLine', {
				width: '100%',
			})
			.to(
				'.aboutContent',
				{
					opacity: 1,
					stagger: 0.1,
				},
				'<'
			)
	}
}

export default gsapInit
