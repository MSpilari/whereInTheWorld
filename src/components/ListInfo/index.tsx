import { LabelStyled } from './styles'

interface ListInfoProps {
	infoArr?: string[]
	infoObj?: { name: string }[]
	text: string
}

const ListInfo: React.FC<ListInfoProps> = ({ infoArr, infoObj, text }) => {
	return (
		<p>
			{text}
			{infoArr
				? infoArr?.map((element, index) => (
						<LabelStyled key={index}>{element}</LabelStyled>
				  ))
				: infoObj?.map((element, index) => (
						<LabelStyled key={index}>{element.name}</LabelStyled>
				  ))}
		</p>
	)
}

export { ListInfo }
