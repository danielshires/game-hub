import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PLatformSelector';
import { Platform } from './hooks/useGames';

const App = () => {
	const [selectdGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null,
	);

	console.log(selectdGenre);
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
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem gridArea='aside' paddingX={5}>
					<GenreList
						onSelectGenre={(genre) => setSelectedGenre(genre)}
						selectedGenre={selectdGenre}
					/>
				</GridItem>
			</Show>
			<GridItem gridArea='main'>
				<PlatformSelector
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					selectedPlatform={selectedPlatform}
				/>
				<GameGrid selectedGenre={selectdGenre} selectedPlatform={selectedPlatform}/>
			</GridItem>
		</Grid>
	);
};

export default App;
