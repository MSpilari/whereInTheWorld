import { BiArrowBack } from 'react-icons/bi'
import { MainWrapper } from '../components/MainWrapper'
import { Header } from '../components/Header'
import { Button as BackButton } from '../components/Button'
import { StyledLink } from '../components/Card/styles'
import { SingleCountry } from '../components/SingleCountry'

const CountryInfo: React.FC = () => {
	return (
		<MainWrapper isHome={false}>
			<Header />
			<StyledLink to='/'>
				<BackButton icon={<BiArrowBack />} label={'Back'} />
			</StyledLink>
			<SingleCountry />
		</MainWrapper>
	)
}

export { CountryInfo }
