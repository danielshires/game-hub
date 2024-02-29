import React from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				md: '1fr 3fr',
				lg: '1fr 3fr',
				xl: '1fr 3fr',
			}}
			templateRows={{
				base: 'auto',
				md: 'auto',
				lg: 'auto',
				xl: 'auto',
			}}
			gap={4}>
			<GridItem gridArea='nav' bg='coral'>
				Nav
			</GridItem>
			<Show above="lg">
				<GridItem gridArea='aside' bg='gold'>
					Aside
				</GridItem>
			</Show>

			<GridItem gridArea='main' bg='dodgerblue'>
				Main
			</GridItem>
		</Grid>
	);
};

export default App;
