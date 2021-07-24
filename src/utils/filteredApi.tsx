import axios from 'axios'

const filteredApiCall = async (url: string) => {
	const resp = await axios.get(url)

	return resp.data
}

export { filteredApiCall }
