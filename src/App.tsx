import React from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { ColorModeSwitch } from './components/ColorModeSwitch';

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '1fr 1fr',
				xl: '1fr 3fr',
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
				<GridItem gridArea='aside'>
					Aside
				</GridItem>
			</Show>

			<GridItem gridArea='main'>
				Main
			</GridItem>
		</Grid>
	);
};

export default App;
