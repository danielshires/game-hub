import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	platform: any;
	id: number;
	name: string;
	slug: string;
	parent_platforms: { platform: Platform }[];
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: Platform[];
	metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
	useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
