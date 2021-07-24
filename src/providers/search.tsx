import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface FilterProps {
	searchBy: string
	search: string
}

interface SearchProps {
	filters: FilterProps
	setSearch: Dispatch<SetStateAction<FilterProps>>
}

const DefaultSearchContext = {
	filters: {
		searchBy: '',
		search: ''
	},
	setSearch: () => {}
}

const SearchContext = createContext<SearchProps>(DefaultSearchContext)

const SearchProvider: React.FC = ({ children }) => {
	const [filters, setSearch] = useState(DefaultSearchContext.filters)
	return (
		<SearchContext.Provider value={{ filters, setSearch }}>
			{children}
		</SearchContext.Provider>
	)
}

export { SearchContext, SearchProvider }
