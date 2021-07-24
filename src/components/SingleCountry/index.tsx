import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../providers/theme'
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
		axios
			.get(
				`https://restcountries.eu/rest/v2/name/${country.toLowerCase()}?fullText=true`
			)
			.then(resp => {
				setCountryInfo(resp.data)
			})
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
							<p>
								Top Level Domain:
								{element.topLevelDomain.map((domain, index) => (
									<label key={index}>{domain}</label>
								))}
							</p>
							<p>
								Currencies:
								{element.currencies.map((curr, index) => (
									<label key={index}>{curr.name}</label>
								))}
							</p>
							<p>
								Languages:
								{element.languages.map((lang, index) => (
									<label key={index}>{lang.name}</label>
								))}
							</p>
							<p>
								Border Countries:
								{element.borders.map((el, index) => (
									<a key={index} href='www.google.com'>
										{el}
									</a>
								))}
							</p>
						</AsideInfo>
					</SingleCountryWrapper>
				)
			})}
		</>
	)
}

export { SingleCountry }
