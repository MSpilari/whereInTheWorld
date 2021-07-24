import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface ThemeTypes {
	theme: string
	setTheme: Dispatch<SetStateAction<string>>
}

const defaultContext = {
	theme: 'Ligth',
	setTheme: () => {}
}

const ThemeContext = createContext<ThemeTypes>(defaultContext)

const ThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState(defaultContext.theme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext }
