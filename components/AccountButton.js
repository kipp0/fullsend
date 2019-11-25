import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AccountButton(props) {
	const {text, styles, focused} = props


	return (
		<TouchableOpacity
			size={26}
			style={styles? styles : { marginBottom: -3 }}
			color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		>
			<Text>{text}</Text>

		</TouchableOpacity>
	);
}
