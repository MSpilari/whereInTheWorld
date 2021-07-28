import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../providers/theme'
import { singleCountry } from '../../utils/singleCountry'
import { BorderCountries } from '../Borders'
import { ListInfo } from '../ListInfo'
import {
	Flag,
	SectionFlag,
	SingleCountryWrapper,
	AsideInfo,
	CountryName
} from './styles'

interface SingleCountryProps {
	flag: string
	name: string
	population: number
	nativeName: string
	region: string
	subregion: string
	capital: string
	topLevelDomain: string[]
	currencies: {
		name: string
	}[]
	languages: {
		name: string
	}[]
	borders: []
}

interface ParamsProps {
	country: string
}

const SingleCountry: React.FC = () => {
	const { theme } = useContext(ThemeContext)
	const [countryInfo, setCountryInfo] = useState([])
	const { country } = useParams<ParamsProps>()

	useEffect(() => {
		singleCountry(country).then(resp => setCountryInfo(resp))
	}, [country])

	return (
		<>
			{countryInfo.map((element: SingleCountryProps, index) => {
				return (
					<SingleCountryWrapper key={index}>
						<SectionFlag>
							<Flag src={element.flag} alt={`${element.name} flag`} />
						</SectionFlag>
						<AsideInfo theme={theme}>
							<CountryName theme={theme}>{element.name}</CountryName>

							<label>Native Name: {element.nativeName}</label>
							<label>Population: {element.population}</label>
							<label>Region: {element.region}</label>
							<label>Sub Region: {element.subregion}</label>
							<label>Capital: {element.capital}</label>

							<ListInfo
								text='Top Level Domain: '
								infoArr={element.topLevelDomain}
							/>

							<ListInfo text='Currencies: ' infoObj={element.currencies} />

							<ListInfo text='Languages: ' infoObj={element.languages} />

							<BorderCountries links={element.borders} />
						</AsideInfo>
					</SingleCountryWrapper>
				)
			})}
		</>
	)
}

export { SingleCountry }
