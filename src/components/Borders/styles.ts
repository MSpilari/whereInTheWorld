import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BorderLink = styled(Link)`
	text-decoration: none;
	border-radius: 8px;
	background-color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 22%)'};
	color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
	padding: 4px;
	margin: 0px 2px;

	&:hover {
		background-color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(0, 0%, 80%)' : 'hsl(209, 23%, 30%)'};
	}
`

export { BorderLink }
