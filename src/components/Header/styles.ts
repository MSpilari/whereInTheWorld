import styled from 'styled-components'

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
	padding: 8px 20px;
	background-color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
	border-bottom: solid 1px
		${({ theme }) =>
			theme === 'Ligth' ? 'hsl(0, 0%, 85%)' : 'hsl(209, 23%, 22%)'};
	& h4 {
		color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
	}
`

export { StyledHeader }
