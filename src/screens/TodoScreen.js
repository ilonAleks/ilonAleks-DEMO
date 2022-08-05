import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'

export const TodoScreen = ({ goBack }) => {
	return <View>
		<Text>'todo.title, который выдает ошибку('</Text>
		<Button title='Go back' onPress={goBack} />
	</View>
}

const styles = StyleSheet.create({})