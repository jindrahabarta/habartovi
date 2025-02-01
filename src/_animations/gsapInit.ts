import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapInit = (path: string) => {
	ScrollTrigger.killAll()
	gsap.registerPlugin(ScrollTrigger)

	const mm = gsap.matchMedia()

	const pathWithoutLang = path.slice(3)

	//GLOBAL

	if (window.innerWidth > 640) {
		//FOR PC
		//Navigation
		ScrollTrigger.create({
			trigger: document.body,
			start: 'top+=10px top',
			end: 'top+=10px top',

			onEnter: () => {
				gsap.to('#navUl', {
					duration: 0.333,
					height: '4rem',
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
		//MOBILE Navigation
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
					width: 130,
					duration: 0.333,
				})
			},
			onEnterBack: () => {
				gsap.to('#navWrapper', {
					duration: 0.333,
					height: '5rem',
				})

				gsap.to('#navLogo', {
					width: 150,
					duration: 0.333,
				})
			},
		})

		//MOBILE Footer easter egg
		mm.add('(max-width: 639px)', () => {
			gsap.set('#footerEasterEgg', {
				display: 'none',
			})

			ScrollTrigger.create({
				trigger: 'footer',
				start: '80% bottom',
				end: '80% bottom',
				markers: true,
				onEnter: () => {
					gsap.set('#footerEasterEgg', {
						display: 'flex',
					})
				},
				onEnterBack: () => {
					gsap.set('#footerEasterEgg', {
						display: 'none',
					})
				},
			})
		})
	}

	//HERO

	if (pathWithoutLang === '' || pathWithoutLang === '/keramicka-dilna') {
		const heroTl = gsap.timeline({
			defaults: { duration: 0.7, ease: 'power1.inOut' },
		})

		heroTl
			.to('#heroShade', {
				backgroundColor: 'rgb(0 0 0 / 0.4)',
			})
			.to('.heroPart', {
				translateX: 0,
				opacity: 1,
				stagger: 0.2,
			})

		gsap.to('#heroImage', {
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: 1,
			},

			scale: 1.2,
		})
	}

	if (pathWithoutLang === '') {
		//SELECTED PAGE
		// const aboutTl = gsap.timeline({
		// 	defaults: {
		// 		duration: 0.5,
		// 		ease: 'power1.inOut',
		// 	},
		// 	scrollTrigger: {
		// 		trigger: '#about',
		// 		start: 'top center',
		// 		end: 'bottom center',
		// 		toggleActions: 'play none none none',
		// 	},
		// })
		// aboutTl
		// 	.to('#aboutVerticalLine', {
		// 		height: '100%',
		// 	})
		// 	.to('#aboutHorizontalLine', {
		// 		width: '100%',
		// 	})
		// 	.to(
		// 		'.aboutContent',
		// 		{
		// 			opacity: 1,
		// 			stagger: 0.1,
		// 		},
		// 		'<'
		// 	)
	} else if (pathWithoutLang.split('/')[1] === 'blog') {
		gsap.to('.blogCard', {
			opacity: 1,
			stagger: 0.2,
			duration: 0.3,
		})

		if (
			!path.split('/').includes('rubriky') &&
			path.split('/').length > 3
		) {
			gsap.to('#blogArticle', {
				translateY: 0,
				ease: 'power1.out',
				duration: 0.4,
				opacity: 1,
			})
		}
	}
}

export default gsapInit
