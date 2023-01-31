import { client } from './axios-config'

export const getAllCountry = async (setAllCountry) => {
	const response = await client.get('/all')
	setAllCountry(response.data)
}

export const getCountryByLang = async (setAllCountry, searchContent) => {
	let url = searchContent === '' ? '/all' : '/lang/' + searchContent
	const response = await client.get(url)
	setAllCountry(response.data)
}