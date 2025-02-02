import gsap from 'gsap'

export const animateBlogCards = () => {
	gsap.to('.blogCard', {
		opacity: 1,
		stagger: 0.2,
		duration: 0.3,
	})
}

export const animateCategoryList = () => {
	gsap.to('.blogCategoryLink', {
		opacity: 1,
		duration: 0.3,
	})
}
