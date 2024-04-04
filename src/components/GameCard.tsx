import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';
import Emoji from './Emoji';

interface Props {
	game: Game;
	key: number;
}

const GameCard = ({ game }: Props) => {
	return (
		<GameCardContainer>
			<Card borderRadius={10} overflow={'hidden'}>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					alt={game.name}
				/>
				<CardBody>
					<HStack marginBottom={3} justifyContent='space-between'>
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xl'}>
						{game.name} <Emoji rating={game.rating_top} />
					</Heading>
				</CardBody>
			</Card>
		</GameCardContainer>
	);
};

export default GameCard;
