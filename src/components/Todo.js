import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove, onOpen }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			// засветление на 50 %
			onPress={() => onOpen(todo.Id)}
			onLongPress={onRemove.bind(null, todo.id)}
		>
			{/* засветление нажатого элемента */}
			<View style={styles.todo}>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10,
	}
})