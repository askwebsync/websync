// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Wisma52',
		date: '30 May 2022',
		category: 'Web Application',
		img:
			[require('@/assets/images/mock/mockup-1.png'),
			require('@/assets/images/wisma52/Home.png'),
			require('@/assets/images/wisma52/Fasilitas.png'),
			require('@/assets/images/wisma52/Gallery.png'),
			require('@/assets/images/wisma52/Price.png'),
			require('@/assets/images/wisma52/Information.png')],
		link: 'https://wisma52.com/'
	},
	{
		id: 2,
		title: 'Game E-commerce',
		date: '29 Mayy 2022',
		category: 'UI/UX Design',
		img: [require('@/assets/images/mock/mockup-3.png'),
		require('@/assets/images/habitual/mobile-project-1.png'),
		require('@/assets/images/habitual/mobile-project-2.png'),
		require('@/assets/images/habitual/mobile-project-3.png'),
		require('@/assets/images/habitual/mobile-project-4.png'),
		require('@/assets/images/habitual/mobile-project-5.png'),
		require('@/assets/images/habitual/mobile-project-6.png'),
		require('@/assets/images/habitual/mobile-project-7.png'),],
		link: 'https://rafikarim1717.github.io/Habitual/'
	},
	{
		id: 3,
		title: 'PhotoApp',
		date: '30 January 2022',
		category: 'UI/UX Design',
		img: [require('@/assets/images/mock/mockup-2.png'),
		require('@/assets/images/photoApp/Start.png'),
		require('@/assets/images/photoApp/Register.png'),
		require('@/assets/images/photoApp/Login.png'),
		require('@/assets/images/photoApp/Home.png'),
		require('@/assets/images/photoApp/Search.png'),
		require('@/assets/images/photoApp/Discover.png'),
		require('@/assets/images/photoApp/Chat.png'),],
		link: 'https://rafikarim1717.github.io/PhotoApp/'
	},
	{
		id: 4,
		title: 'Mental Health',
		date: '2 June 2022',
		category: 'UI/UX Design',
		img: [require('@/assets/images/mock/mockup-4.png'),
		require('@/assets/images/mental-health/awal.png'),
		require('@/assets/images/mental-health/profile.png'),
		require('@/assets/images/mental-health/home.png'),
		require('@/assets/images/mental-health/choose.png'),
		require('@/assets/images/mental-health/choose-1.png'),
		require('@/assets/images/mental-health/chat.png'),
		require('@/assets/images/mental-health/payment.png'),
		require('@/assets/images/mental-health/payment-succes-consult.png'),
		require('@/assets/images/mental-health/webinar-category.png'),
		require('@/assets/images/mental-health/webinar-detail.png'),
		require('@/assets/images/mental-health/webinar-consult.png'),
		require('@/assets/images/mental-health/webinar-payment.png'),
		require('@/assets/images/mental-health/webinar-succes-payment.png'),
		],
		link:''
	},
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	date: '30 January 2028',
	// 	category: 'Web Application',
	// 	img: [require('@/assets/images/web-project-1.jpg'), require('@/assets/images/web-project-1.jpg')],
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	date: '30 January 2022',
	// 	category: 'Web Application',
	// 	img: [require('@/assets/images/web-project-1.jpg'), require('@/assets/images/web-project-1.jpg')],
	// },
];
export default projects;
