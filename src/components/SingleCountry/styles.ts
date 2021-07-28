import styled from 'styled-components'

const SingleCountryWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 0.5fr;

	@media only screen and (max-width: 560px) {
		grid-template-rows: 0.5fr 0.5fr;
		grid-template-columns: 1fr;
	}
`

const SectionFlag = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Flag = styled.img`
	width: 90%;
	margin: 10px auto;
`
const AsideInfo = styled.aside`
	display: grid;
	font-size: 16px;
	padding: 10px;
	grid-template-areas:
		'title title title title'
		'native native pop pop'
		'reg reg subreg subreg'
		'cap cap topDom topDom'
		'cur cur topDom topDom'
		'lang lang lang lang'
		'borderC borderC borderC borderC';

	& label,
	& p {
		color: ${({ theme }) =>
			theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
	}

	& label:nth-child(2) {
		grid-area: native;
	}
	& label:nth-child(3) {
		grid-area: pop;
	}
	& label:nth-child(4) {
		grid-area: reg;
	}
	& label:nth-child(5) {
		grid-area: subreg;
	}
	& label:nth-child(6) {
		grid-area: cap;
	}

	& p:nth-child(7) {
		grid-area: topDom;
	}
	& p:nth-child(8) {
		grid-area: cur;
	}
	& p:nth-child(9) {
		grid-area: lang;
	}

	& p:nth-child(10) {
		grid-area: borderC;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
`

const CountryName = styled.h1`
	grid-area: title;
	color: ${({ theme }) =>
		theme === 'Ligth' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
`

export { SingleCountryWrapper, Flag, SectionFlag, AsideInfo, CountryName }
