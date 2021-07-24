import { useContext } from 'react'
import { StyledCardWrapper, StyledLink } from './styles'
import { ThemeContext } from '../../providers/theme'

interface CountryProps {
	name: string
	flag: string
	capital: string
	population: number
	region: string
}

interface CardProps {
	country: CountryProps
}

const CardWrapper: React.FC<CardProps> = ({ country }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<StyledLink to={`/countryInfo/${country.name}`}>
			<StyledCardWrapper theme={theme}>
				<img src={country.flag} alt={`${country.name} flag`} />
				<h3>{country.name}</h3>
				<p>Population: {country.population}</p>
				<p>Region: {country.region}</p>
				<p>Capital: {country.capital}</p>
			</StyledCardWrapper>
		</StyledLink>
	)
}

export { CardWrapper }
