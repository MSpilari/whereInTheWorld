import React from 'react'
import { ThemeProvider } from './providers/theme'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CountryInfo } from './pages/CountryInfo'

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<ThemeProvider>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/countryInfo/:country' exact>
						<CountryInfo />
					</Route>
				</ThemeProvider>
			</Switch>
		</Router>
	)
}

export default App
