import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					xl: 5,
				}}
				padding={6}
				spacing={6}>
				{games.map((game) => (
					<GameCard game={game} key={game.id} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
