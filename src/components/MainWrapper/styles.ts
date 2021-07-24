import styled from 'styled-components'
import { MainWrapperProps } from './index'

const MainWrapperStyled = styled.main<MainWrapperProps>`
	background-color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
	width: 100vw;
	height: ${({ isHome }) => (isHome ? '100%' : '100vh')};
`

export { MainWrapperStyled }
