import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
	const { data } = useGenres();

	console.log(data.map((genre) => genre.name));
	return (
		<div>
			<List>T
				{data.map((genre) => (
					<ListItem key={genre.id}>
						<HStack paddingY={2}>
							<Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
							<Text fontSize='large'>{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default GenreList;
