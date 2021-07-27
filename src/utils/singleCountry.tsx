import axios from 'axios'

const singleCountry = async (countryName: string) => {
	const resp = await axios.get(
		`https://restcountries.eu/rest/v2/name/${countryName.toLowerCase()}?fullText=true`
	)
	return resp.data
}

export { singleCountry }
