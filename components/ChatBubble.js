import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ChatBubble(props) {
	const {text, focused, isYou} = props

	return (
		<View style={isYou? styles.bubbleViewYou : styles.bubbleViewThem}>
			<View
				style={isYou ? styles.bubbleYou : styles.bubbleThem}
			>
				<Text>{text}</Text>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bubbleYou: {
		flexWrap: 'wrap',
		paddingVertical: 20,
		paddingHorizontal: 25,
		backgroundColor: '#E8E8E8',
		borderRadius: 50,
		maxWidth: '50%',
	},
	bubbleThem: {
		flexWrap: 'wrap',
		paddingVertical: 20,
		paddingHorizontal: 25,
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 50,
		maxWidth: '50%',
	},
	bubbleViewYou: {
		flex: 1, 
		alignSelf: 'flex-end', 
		paddingRight: 20
	},
	bubbleViewThem: {
		flex: 1, 
		alignSelf: 'flex-start', 
		paddingLeft: 20
	},
})