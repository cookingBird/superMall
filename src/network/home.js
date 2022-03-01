import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
	const HomeMultidata = axios({
		url: '/home/multidata'
	});
	HomeMultidata.then(
		// res => console.log(res)
	);

	return HomeMultidata
}

export function getHomeData(type, page) {
	const	HomeData = axios({
		url: '/home/data',
		params: {
      type,
      page
    }
	});
	HomeData.then(
		// res => console.log(res)
	);
	return HomeData
}