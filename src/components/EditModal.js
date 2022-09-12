import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { THEME } from '../Theme.js'
import { AppButton } from './ui/AppButton.js'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
	const [title, setTitle] = useState(value)

	const saveHandler = () => {
		if (title.trim().length < 5) {
			Alert.alert(
				'Error!',
				`Title should has minimal 5 symbols. Now introduced only ${title.trim().length}.`)
		} else {
			onSave(title)
		}
	}
	return (
		<Modal
			visible={visible}
			animationType="slide"
			transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={styles.input}
					placeholder='Enter a new title for this Todo'
					autoCapitalize='none'
					autoCorrect={false}
					maxLength={50} />
				<View style={styles.buttons}>
					<AppButton onPress={onCancel}
						color={THEME.Danger_color}>
						<MaterialIcons name="cancel" size={24} color="white" />
					</AppButton>


					<AppButton onPress={saveHandler}>
						<Feather name="save" size={24} color="white" />
					</AppButton>

				</View>
			</View>
		</Modal >
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	},
	input: {
		marginLeft: 40,
		padding: 10,
		borderBottomColor: THEME.Main_color,
		borderBottomWidth: 2,
		width: '80%'
	},
	buttons: {
		// padding: 10,
		// flexDirection: 'row',
		// justifyContent: 'space-around',
		// marginBottom: 15,
		// paddingLeft: 20,
		// paddingLeft: 20,
		// width: 400
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around'
	}
})