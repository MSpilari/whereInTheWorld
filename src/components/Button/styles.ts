import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
	outline: none;
	padding: 5px;
	border: solid 1px
		${({ theme }) =>
			theme === 'Ligth' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;

	color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};

	&:hover {
		background-color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(0, 0%, 80%)' : 'hsl(209, 23%, 30%)'};
	}

	& i {
		height: 16px;
		margin-right: 3px;
	}

	& image-rendering,
	& label {
		pointer-events: none;
	}
`

export { StyledButton }
