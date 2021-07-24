import { ButtonHTMLAttributes, useContext } from 'react'
import { ThemeContext } from '../../providers/theme'
import { StyledButton } from './styles'

import { IconBaseProps } from 'react-icons'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconBaseProps
	label: string
}

const Button: React.FC<ButtonProps> = ({ icon, label, ...props }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<StyledButton {...props} theme={theme}>
			<i>{icon}</i>
			<label>{label}</label>
		</StyledButton>
	)
}

export { Button }
