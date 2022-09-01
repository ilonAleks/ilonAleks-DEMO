import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'
import { EditModal } from '../components/EditModal'
import { AppButton } from '../components/ui/AppButton'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
	const [modal, setModal] = useState(false)

	const saveHandler = title => {
		onSave(todo.id, title)
		setModal(false)
	}

	return (
		<View>
			<EditModal
				value={todo.title}
				visible={modal}
				onCancel={() => setModal(false)}
				onSave={saveHandler} />
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<AppButton onPress={() => setModal(true)}>
					<Feather name="edit" size={20} color="white" />
				</AppButton>
			</AppCard>

			<View style={styles.buttons}>
				<View style={styles.button}>
					<AppButton color={THEME.Danger_color} onPress={goBack}>
						<AntDesign name="back" size={24} color="white" />
					</AppButton>
				</View>
				<View style={styles.button}>
					<AppButton color={THEME.Grey_color} onPress={() => onRemove(todo.id)}>
						<AntDesign name="delete" size={24} color="white" />
					</AppButton>
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
		// width: Dimensions.get('window').width / 3
		width: Dimensions.get('window').width > 350 ? 150 : 100
	},
	card: {
		padding: 15,
		marginBottom: 20
	},
	title: {
		fontSize: 20
	}
})