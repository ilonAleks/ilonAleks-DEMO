import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'

export const TodoScreen = ({ goBack, todo }) => {
	return (
		<View>
			{/* <Text>{todo.title}</Text> */}
			<Text>'todo.title, который выдает ошибку'</Text>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title='Go back' color='#757575' onPress={goBack} />
				</View>
				<View style={styles.button}>
					<Button title='Delete' color='#e53935' onPress={console.log('To remove')} />
				</View>

			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		width: '45%'
	}
})