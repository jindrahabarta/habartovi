import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapInit = (path: string) => {
	ScrollTrigger.killAll()
	gsap.registerPlugin(ScrollTrigger)

	const mm = gsap.matchMedia()

	const pathWithoutLang = path.slice(3)

	//GLOBAL

	if (window.innerWidth > 1024) {
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

			if (pathWithoutLang !== '/blog') {
				ScrollTrigger.create({
					trigger: 'footer',
					start: 'bottom-=10px bottom',
					end: 'bottom-=10px bottom',

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
			}
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

	//SELECTED PAGES
	if (pathWithoutLang === '') {
		mm.add('(min-width: 768px)', () => {
			gsap.set('.ZaHScrollSpeed', {
				opacity: 0,
				translateY: '8rem',
			})

			const ZdenekAHelenaTl = gsap.timeline({
				paused: true,
				defaults: { duration: 0.3, ease: 'power1.inOut' },
			})

			ZdenekAHelenaTl.to('#ZaHBckdropRight', {
				opacity: 0,
			}).to(
				'#ZaHBckdropLeft',
				{
					opacity: 0.8,
				},
				'<'
			)

			ScrollTrigger.create({
				trigger: '#ZdenekAHelena',
				start: 'center center',
				end: 'center center',

				onEnter: () => {
					ZdenekAHelenaTl.play()
				},
				onEnterBack: () => {
					ZdenekAHelenaTl.reverse()
				},
			})

			gsap.to('#ZdenekAHelenaImg', {
				scrollTrigger: {
					trigger: '#ZdenekAHelena',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 5,
				},

				scale: 1.1,
			})

			const fadeInElements = [
				'.ZaHScrollSpeedLeft',
				'.ZaHScrollSpeedRight',
			]
			fadeInElements.forEach((selector) => {
				gsap.to(selector, {
					scrollTrigger: {
						trigger: selector.includes('Left')
							? '#ZaHLeft'
							: '#ZaHRight',
						start: 'top 80%',
						end: 'bottom 80%',
						scrub: 1,
					},
					opacity: 1,
					translateY: 0,
				})
			})
		})

		mm.add('(max-width: 767px)', () => {
			gsap.set('.ZaHScrollSpeed', {
				opacity: 1,
				translateY: 0,
			})
		})
	} else if (pathWithoutLang.split('/')[1] === 'blog') {
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
