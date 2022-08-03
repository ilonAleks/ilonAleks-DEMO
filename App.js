import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }   // ! не понятна логика. Спросить у Наташи

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
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
