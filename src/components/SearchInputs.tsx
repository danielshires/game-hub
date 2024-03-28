import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export const SearchInputs = () => {
	return (
		<InputGroup>
			<InputLeftElement children={<BsSearch />} />
			<Input borderRadius={20} placeholder='Search games...' variant='fill' />
		</InputGroup>
	);
};
