import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCardWrapper = styled.div`
	width: 200px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	background-color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 22%)'};
	color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};

	& img {
		width: 100%;
		height: 125px;
		border-radius: 8px 8px 0px 0px;
		margin-bottom: 10px;
	}

	& h3,
	& p {
		margin-left: 10px;
		font-size: 14px;
	}
	& p:last-child {
		margin-bottom: 10px;
	}
`
const StyledLink = styled(Link)`
	text-decoration: none;
`

export { StyledCardWrapper, StyledLink }
