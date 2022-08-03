import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
	return <View>
		<AddTodo onSubmit={addTodo} />
		<FlatList //! урок 21 скрол не работает
			keyExtractor={item => item.id.toString()}
			data={todos}
			renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
		/>
	</View>
}

const styles = StyleSheet.create({})