/** @format */

import { Box, HStack, Pressable, Text } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { TextStyle } from 'react-native';
import { hitSlop } from '../../utils';
type Props = {
	title?: string | React.ReactElement;
	onBack?: () => void;
	RightElement?: React.ReactElement;
	RightContent?: React.ReactElement;
	titleStyle?: TextStyle;
	bgColor?: string;
	backIcon?: React.ReactElement;
};

const Header: React.FC<Props> = ({
	title,
	onBack,
	RightElement,
	titleStyle,
	bgColor,
	backIcon,
	RightContent
}) => {
	const navigation = useNavigation();
	return (
		<HStack
			bgColor={bgColor || 'white'}
			position={'relative'}
			width={'100%'}
			p={1.5}
			justifyContent={'space-between'}
			alignItems={'center'}>
			<Pressable
				hitSlop={hitSlop}
				_pressed={{ opacity: 0.5 }}
				zIndex={10}
				onPress={() => {
					if (onBack) return onBack();

					navigation.goBack();
				}}>
				{backIcon ? (
					backIcon
				) : (
					<AntDesign
						name='left'
						size={24}
					/>
				)}
			</Pressable>
			{RightElement}
			<Box
				width={'100%'}
				position={'absolute'}
				justifyContent={'center'}
				alignItems={'center'}>
				<Text
					fontSize={'xl'}
					style={titleStyle}>
					{title}
				</Text>
			</Box>
			{RightContent}
		</HStack>
	);
};

export default React.memo(Header);
