import { useContext, useEffect, useState } from 'react'
import { AllCountriesWrapper } from './styles'
import { CardWrapper } from '../Card'
import { SearchContext } from '../../providers/search'
import { apiCountries } from '../../utils/allCountries'
import { filteredApiCall } from '../../utils/filteredApi'

const CountriesList: React.FC = () => {
	const [allCountries, setAllCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])
	const { filters } = useContext(SearchContext)

	useEffect(() => {
		const hasCalled = sessionStorage.getItem('allCountries')

		if (!hasCalled) apiCountries().then(resp => setAllCountries(resp))
		else setAllCountries(JSON.parse(hasCalled))
	}, [])

	useEffect(() => {
		if (filters.searchBy === 'Region') {
			filteredApiCall(
				`https://restcountries.eu/rest/v2/region/${filters.search}`
			).then(resp => setFilteredCountries(resp))
		} else if (filters.searchBy === 'Country') {
			filteredApiCall(
				`https://restcountries.eu/rest/v2/name/${filters.search}`
			).then(resp => setFilteredCountries(resp))
		}
	}, [filters])

	return (
		<AllCountriesWrapper>
			{filters.search === '' &&
				allCountries.map((country, index) => {
					return <CardWrapper key={index} country={country} />
				})}
			{filters.search !== '' &&
				filters.searchBy !== '' &&
				filteredCountries.map((country, index) => {
					return <CardWrapper key={index} country={country} />
				})}
		</AllCountriesWrapper>
	)
}

export { CountriesList }
