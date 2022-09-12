import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext.js";
import { todoReducer } from "./TodoReducer.js";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../Type.js'

export const TodoState = ({ children }) => {
	const initialState = {
		todos: [
			{ id: '1', title: 'Learn React Native' },
			{ id: '2', title: 'Learn English' },
		]
	}

	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = title => dispatch({ type: ADD_TODO, title })
	const removeTodo = id => dispatch({ type: REMOVE_TODO, id })
	const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

	return (
		<TodoContext.Provider
			value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}>
			{children}
		</TodoContext.Provider>
	)
}