import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../providers/theme'
import { allBorders } from '../../utils/allBorders'
import { BorderLink } from './styles'

interface BorderCountriesProps {
	links: []
}

interface CountryProps {
	name: string
}

const BorderCountries: React.FC<BorderCountriesProps> = ({ links }) => {
	const { theme } = useContext(ThemeContext)
	const [borderNames, setBorderNames] = useState([])

	useEffect(() => {
		allBorders(links).then(resp => setBorderNames(resp))
	}, [links])

	return (
		<p>
			Border Countries:
			{borderNames.map((country: CountryProps, index) => (
				<BorderLink
					theme={theme}
					key={index}
					to={`/countryInfo/${country.name}`}
				>
					{country.name}
				</BorderLink>
			))}
		</p>
	)
}

export { BorderCountries }
