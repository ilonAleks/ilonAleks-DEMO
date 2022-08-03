import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: 1, title: 'asdfgh' },
    { id: 2, title: 'qwerty' },
  ])

  const addTodo = title => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }   // todo не понятна логика. Спросить у Наташи

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )
  // ! не запустилось 25 урок 2:30

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
  }
  // ! запустилось 25 урок 4:05, но отображается только Navbar

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}></View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});


// !MAP GOOGLE

// import * as React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { Alert } from 'react-native';
// import * as Location from 'expo-Location'

// const API_KEY_MAP = 'AIzaSyCM8kWup8DQtvJltXhAi9wGXlddT-5Y18w'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
