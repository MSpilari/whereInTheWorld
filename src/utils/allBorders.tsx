import axios from 'axios'

const allBorders = async (bordersArr: []) => {
	const countryInitials = bordersArr
		.map((initials: string) => initials.toLowerCase() + ';')
		.join('')

	const resp = await axios.get(
		`https://restcountries.eu/rest/v2/alpha?codes=${countryInitials}`
	)
	return resp.data
}

export { allBorders }
