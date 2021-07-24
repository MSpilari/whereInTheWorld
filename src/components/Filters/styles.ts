import styled from 'styled-components'

const FiltersWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px 40px;
	align-items: center;
	justify-content: space-between;

	& input,
	& select {
		padding: 5px 80px 5px 5px;
		margin: 5px 0;
		background-color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 22%)'};
		border: none;
		outline: none;
		border-radius: 8px;
		color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
	}
`

export { FiltersWrapper }
