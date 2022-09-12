import React from 'react';
import { MainLayout } from './src/MainLayout.js';
import { TodoState } from './src/context/todo/TodoState.js';

export default function App() {


  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  )
}




