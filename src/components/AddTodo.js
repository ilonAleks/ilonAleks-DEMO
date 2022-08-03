import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) { //проверка, чтобы не добавлялась пустая строка
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('Ты хочешь добавить пустоту...')
		}


	}

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value}
				placeholder="Enter the title"
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Button title="Add" onPress={pressHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '85%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: 'blue',
	}
})