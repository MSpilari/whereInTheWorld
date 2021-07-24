import { useContext } from 'react'
import { ThemeContext } from '../../providers/theme'
import { MainWrapperStyled } from './styles'

interface MainWrapperProps {
	isHome: boolean
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children, ...props }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<MainWrapperStyled {...props} theme={theme}>
			{children}
		</MainWrapperStyled>
	)
}

export { MainWrapper }
export type { MainWrapperProps }
