import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FakeTitleBar(props) {
	const { text, focused, navigation, name } = props
	const {navigate} = navigation
	return (
		<View style={styles.titleBar}>
			<TouchableOpacity onPress={() => navigate('Main')} style={styles.BackButton}>
				<Text >Back</Text>
			</TouchableOpacity>
			<Text>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	titleBar: {
		paddingTop: 30,
		paddingHorizontal: 25,
		borderBottomColor: '#000',
	},
})


