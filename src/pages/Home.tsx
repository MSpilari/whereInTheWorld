import React from 'react'
import { MainWrapper } from '../components/MainWrapper/index'
import { Filters } from '../components/Filters'
import { Header } from '../components/Header'
import { CountriesList } from '../components/CountriesList'
import { SearchProvider } from '../providers/search'

const Home: React.FC = () => {
	return (
		<MainWrapper isHome={true}>
			<Header />
			<SearchProvider>
				<Filters />
				<CountriesList />
			</SearchProvider>
		</MainWrapper>
	)
}

export { Home }
