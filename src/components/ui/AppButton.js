import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { THEME } from '../../theme'

export const AppButton = ({ children, onPress, color = THEME.Main_color }) => {
	const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
	return (
		<Wrapper onPress={onPress} activeOpacity={0.7}>
			<View style={{ ...styles.button, backgroundColor: color }}>
				<Text style={styles.text}>
					{children}
				</Text>
			</View>
		</Wrapper >
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white'
	}
})