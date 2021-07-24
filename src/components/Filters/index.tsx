import React, { ChangeEvent, useContext } from 'react'
import { FiltersWrapper } from './styles'
import { ThemeContext } from '../../providers/theme'
import { SearchContext } from '../../providers/search'

const Filters: React.FC = () => {
	const { theme } = useContext(ThemeContext)
	const { setSearch } = useContext(SearchContext)

	const writeACountry = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		return setSearch({ searchBy: name, search: value })
	}

	const chooseARegion = (event: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target

		return setSearch({ searchBy: name, search: value })
	}

	return (
		<FiltersWrapper theme={theme}>
			<input
				type='text'
				name='Country'
				placeholder='Search for a country...'
				onChange={e => writeACountry(e)}
			/>
			<select
				placeholder='Filter by Region'
				name='Region'
				onChange={e => chooseARegion(e)}
			>
				<optgroup>
					<option value=''>Filter By Region</option>
					<option value='africa'>Africa</option>
					<option value='asia'>Asia</option>
					<option value='americas'>Americas</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
					<option value='polar'>Polar</option>
				</optgroup>
			</select>
		</FiltersWrapper>
	)
}
export { Filters }
