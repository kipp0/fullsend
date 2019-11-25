import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ChatBubble(props) {
	const {text, focused} = props


	return (
		<View
			style={styles.bubble}
		>
			<Text>{text}</Text>

		</View>
	);
}

const styles = StyleSheet.create({
	bubble: {
		flexWrap: 'wrap',
		paddingVertical: 20,
		paddingHorizontal: 25,
		backgroundColor: '#E8E8E8',
		borderRadius: 50,
		maxWidth: '50%',
	}
})