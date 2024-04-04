import bullsEye from '../assets/icons8-bullseye-96.png';
import thumbsUp from '../assets/icons8-thumb-96.png';
import meh from '../assets/icons8-meh-96.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: {
			src: meh,
			alt: 'meh',
			boxSize: '24px'
		},
		4: {
			src: thumbsUp,
			alt: 'recommended',
			boxSize: '24px'
		},
		5: {
			src: bullsEye,
			alt: 'exceptional',
			boxSize: '24px'
		},
	};

	return <Image {...emojiMap[rating]} marginTop={2}/>;
};

export default Emoji;
