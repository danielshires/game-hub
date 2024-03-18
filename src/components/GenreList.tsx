import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	if (error) return null
	if (isLoading) return <Spinner />;

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
