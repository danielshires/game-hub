import {
	FaWindows,
	FaPlaystation,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface Props {
	platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
	// Defining an index signature that is mapped to the IconType type
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaWindows,
		ios: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		nintendo: SiNintendo,
		web: BsGlobe,
		mac: FaApple,
		iphone: MdPhoneIphone,
	};

	return (
		<>
			<HStack marginY={2}>
				{platforms.map((platform) => (
					// <Text key={platform.id}>{platform.name}</Text>
					<Icon as={iconMap[platform.slug]} color='gray.500' key={platform.id} />
				))}
			</HStack>
		</>
	);
};

export default PlatformIconList;
