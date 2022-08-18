import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: '11111' },
    // { id: '2', title: '22222' },
    // { id: '3', title: '22222' },
    // { id: '4', title: '22222' },
    // { id: '5', title: '22222' },
    // { id: '6', title: '22222' },
    // { id: '7', title: '22222' },
    // { id: '8', title: '22222' },
    // { id: '9', title: '22222' },
    // { id: '10', title: '22222' },
    // { id: '11', title: '22222' },
    // { id: '12', title: '22222' },
    // { id: '13', title: '22222' },
    // { id: '14', title: '22222' },
    // { id: '15', title: '22222' },
  ])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }
  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      "Remove",
      `Do you want to remove "${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: true }
    );

  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }

    )

    )
  }

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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});


