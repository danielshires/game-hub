import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

const App = () => {
	const [gameQuery, setGameQeuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '192px 4fr',
			}}
			templateRows={{
				base: 'auto',
				md: 'auto',
				lg: 'auto',
				xl: 'auto',
			}}
			gap={4}>
			<GridItem gridArea='nav'>
				<NavBar
					onSearch={(searchText) => setGameQeuery({ ...gameQuery, searchText })}
				/>
			</GridItem>
			<Show above='lg'>
				<GridItem gridArea='aside' paddingX={5}>
					<GenreList
						onSelectGenre={(genre) => setGameQeuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			˝
			<GridItem  gridArea='main'>
				<Box paddingLeft={6}>
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={5} marginBottom={5}>
						<PlatformSelector
							onSelectPlatform={(platform) =>
								setGameQeuery({ ...gameQuery, platform })
							}
							selectedPlatform={gameQuery.platform}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQeuery({ ...gameQuery, sortOrder })
							}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;
