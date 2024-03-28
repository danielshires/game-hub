import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const ColorModeSwitch = () => {

	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack paddingLeft={1}>
			<Switch
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
                colorScheme='green'
                ></Switch>
			<Text whiteSpace='nowrap' >Dark Mode</Text>
		</HStack>
	);
};
