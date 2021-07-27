interface BorderCountriesProps {
	links: []
}

const BorderCountries: React.FC<BorderCountriesProps> = ({ links }) => {
	return (
		<p>
			Border Countries:
			{links.map((link, index) => (
				<a key={index} href='www.google.com'>
					{link}
				</a>
			))}
		</p>
	)
}

export { BorderCountries }
