import React from 'react'
import { StyleSheet, View, FlatList, Text, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
	let content = (<FlatList //! урок 21 скрол не работает
		keyExtractor={item => item.id.toString()}
		data={todos}
		renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
	/>)

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