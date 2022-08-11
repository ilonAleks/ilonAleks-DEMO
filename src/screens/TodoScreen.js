import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
	return (
		<View>
			{/* <Text>{todo.title}</Text> */}
			<Text>'todo.title, который выдает ошибку'</Text>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title='Go back' color={THEME.Danger_color} onPress={goBack} />
				</View>
				<View style={styles.button}>
					<Button title='Delete' color={THEME.Grey_color} onPress={console.log('To remove')} />
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