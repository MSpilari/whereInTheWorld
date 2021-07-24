import { useContext } from 'react'
import { ThemeContext } from '../../providers/theme'
import { Button as ButtonThemeSwitcher } from '../Button/index'
import { StyledHeader } from './styles'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

const Header: React.FC = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const changeTheme = () => {
		return theme === 'Ligth' ? setTheme('Dark') : setTheme('Ligth')
	}

	return (
		<StyledHeader theme={theme}>
			<h4>Where in the World?</h4>
			<ButtonThemeSwitcher
				icon={theme === 'Ligth' ? <FaRegMoon /> : <FiSun />}
				label={theme === 'Ligth' ? 'Dark mode' : 'Ligth mode'}
				onClick={() => changeTheme()}
			/>
		</StyledHeader>
	)
}

export { Header }
