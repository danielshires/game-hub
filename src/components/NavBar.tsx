import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/react.svg';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInputs } from './SearchInputs';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding='1rem'>
			<Image src={logo} alt='logo' boxSize={10} paddingRight={1} />
			<SearchInputs onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
