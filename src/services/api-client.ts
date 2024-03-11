import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '0fed8e256de746d287b96a0f7feaa5c0',
	},
});
