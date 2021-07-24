import axios from 'axios'

const apiCountries = async () => {
	const resp = await axios.get('https://restcountries.eu/rest/v2/all')
	sessionStorage.setItem('allCountries', JSON.stringify(resp.data))
	return resp.data
}

export { apiCountries }
