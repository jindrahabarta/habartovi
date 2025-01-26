import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapInit = (path: string) => {
	ScrollTrigger.killAll()
	gsap.registerPlugin(ScrollTrigger)

	const pathWithoutLang = path.slice(3)

	//GLOBAL

	//Navigation
	if (window.innerWidth > 640) {
		ScrollTrigger.create({
			trigger: document.body,
			start: 'top+=10px top',
			end: 'top+=10px top',

			onEnter: () => {
				gsap.to('#navUl', {
					duration: 0.333,
					height: '3.7rem',
				})

				gsap.to('#navLogo', {
					width: 150,
					duration: 0.333,
				})
			},
			onEnterBack: () => {
				gsap.to('#navUl', {
					duration: 0.333,
					height: '5rem',
				})

				gsap.to('#navLogo', {
					width: 170,
					duration: 0.333,
				})
			},
		})
	} else {
		ScrollTrigger.create({
			trigger: document.body,
			start: 'top+=10px top',
			end: 'top+=10px top',

			onEnter: () => {
				gsap.to('#navWrapper', {
					duration: 0.333,
					height: '4.2rem',
				})

				gsap.to('#navLogo', {
					width: 120,
					duration: 0.333,
				})
			},
			onEnterBack: () => {
				gsap.to('#navWrapper', {
					duration: 0.333,
					height: '5rem',
				})

				gsap.to('#navLogo', {
					width: 130,
					duration: 0.333,
				})
			},
		})
	}

	//SELECTED PAGE
	if (pathWithoutLang === '') {
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
