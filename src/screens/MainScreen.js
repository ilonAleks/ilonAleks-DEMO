import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
	const [deviceWidth, setDeviceWidth] = useState(
		Dimensions.get('window').width - THEME.Padding_hor * 2
	)

	useEffect(() => {
		const update = () => {
			const width = Dimensions.get('window').width - THEME.Padding_hor * 2
			setDeviceWidth(width)
		}
		const listener = Dimensions.addEventListener('change', update)

		return () => { listener.remove() }
	})


	let content = (
		<View style={{ width: deviceWidth }}>
			<FlatList //! урок 21 скрол не работает
				keyExtractor={item => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (
					<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
				)}
			/>
		</View>
	)
	if (todos.length === 0) {
		content = <View style={styles.imgWrap}>
			<Image
				source={require('../../assets/todo.png')}
				style={styles.image}
			/>
		</View>
	}

	return <View>
		<AddTodo onSubmit={addTodo} />
		{content}
	</View >
}

const styles = StyleSheet.create({
	imgWrap: {
		// padding: 10,
		justifyContent: 'center',
		alignContent: 'center',
		height: 400
	},
	image: {
		height: '100%',
		width: '100%',
		resizeMode: 'contain'
	}
})