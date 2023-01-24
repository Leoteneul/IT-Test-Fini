import { client } from './axios-config'

export const getAllCountry = async (setAllCountry) => {
	const response = await client.get('/all')
	setAllCountry(response.data)
}