/** @format */

import React from 'react';
import { Pressable } from 'react-native';



import { useRoute } from '@react-navigation/native';
import BaseScreen from '../../components/BaseScreen';

const TransparentModal = () => {
	const { content, fullScreen }: any = useRoute().params || {};
	return (
		<BaseScreen
			backgroundColor='transparent'
			fullScreen={fullScreen}>
			<Pressable style={{ flex: 1}} onPress={() => console.log()}>
				{content}
			</Pressable>
		</BaseScreen>
	);
};

export default TransparentModal;
