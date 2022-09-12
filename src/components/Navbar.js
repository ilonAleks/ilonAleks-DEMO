import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { THEME } from "../Theme.js";

export const Navbar = ({ title }) => {
	return (
		<View style={{
			...styles.navbar, ...Platform.select({
				ios: styles.navbarIos,
				android: styles.navbarAndroid
			})
		}}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 90,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	navbarAndroid: {
		backgroundColor: 'blue'
	},
	navbarIos: {
		borderBottomColor: THEME.Main_color,
		borderBottomWidth: 1
	},
	text: {
		color: 'white',
		fontSize: 20,
	},
})