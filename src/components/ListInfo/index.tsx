interface ListInfoProps {
	info: []
	text: string
}

interface ElementProps {
	name?: string
}

const ListInfo: React.FC<ListInfoProps> = ({ info, text }) => {
	return (
		<p>
			{text}
			{info.map((element: ElementProps, index) => (
				<label key={index}>{element.name || element}</label>
			))}
		</p>
	)
}

export { ListInfo }
