import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
	// console.log(todo)
	return (
		<View>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				{/* <Text style={styles.title}>'todo.title, который выдает ошибку'</Text> */}
				<Button title='Edit' />
			</AppCard>

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
	},
	card: {
		padding: 15,
		marginBottom: 20
	},
	title: {
		fontSize: 20
	}
})