import React, { useState, useContext } from "react";
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './components/Navbar.js';
import { TodoContext } from "./context/todo/TodoContext.js";
import { MainScreen } from './screens/MainScreen.js';
import { TodoScreen } from './screens/TodoScreen.js';
import { THEME } from './Theme.js';

export const MainLayout = () => {
	const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
	const [todoId, setTodoId] = useState(null)
	// const [todos, setTodos] = useState([])

	// const addTodo = (title) => {
	// 	setTodos(prev => [...prev, {
	// 		id: Date.now().toString(),
	// 		title
	// 	}])
	// }
	// const removeTodo = id => {
	// 	const todo = todos.find(t => t.id === id)
	// 	Alert.alert(
	// 		"Remove",
	// 		`Do you want to remove "${todo.title}"?`,
	// 		[
	// 			{
	// 				text: "Cancel",
	// 				style: "cancel",
	// 			},
	// 			{
	// 				text: "Remove",
	// 				style: "destructive",
	// 				onPress: () => {
	// 					setTodoId(null)
	// 					setTodos(prev => prev.filter(todo => todo.id !== id))
	// 				}
	// 			}
	// 		],
	// 		{ cancelable: true }
	// 	);

	// }

	// const updateTodo = (id, title) => {
	// 	setTodos(old => old.map(todo => {
	// 		if (todo.id === id) {
	// 			todo.title = title
	// 		}
	// 		return todo
	// 	})
	// 	)
	// }

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={todoId => {
				setTodoId(todoId)
			}}
		/>
	)

	if (todoId) {
		const selectedTodo = todos.find(todo => todo.id === todoId)
		content = <TodoScreen
			onRemove={removeTodo}
			goBack={() => setTodoId(null)}
			todo={selectedTodo}
			onSave={updateTodo} />
	}

	return (
		<View>
			<Navbar title='Todo App' />
			<View style={styles.container}>
				{content}
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: THEME.Padding_hor,
		paddingVertical: 10,
	},
});