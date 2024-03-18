import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';

interface Props {
	game: Game;
	key: number;
}

const GameCard = ({ game }: Props) => {
	return (
		<GameCardContainer>
            <Card borderRadius={10} overflow={'hidden'}>
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
                <CardBody>
                    <Heading fontSize={'2xl'}>{game.name}</Heading>
                    <HStack justifyContent='space-between'>
                        <PlatformIconList
                            platforms={game.parent_platforms.map((p) => p.platform)}
                        />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </GameCardContainer>
	);
};

export default GameCard;
