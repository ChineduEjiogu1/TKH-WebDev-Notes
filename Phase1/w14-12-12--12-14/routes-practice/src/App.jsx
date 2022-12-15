import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TodosPage from "./components/todos";
import TodoPage from "./components/todo";

let todos = [
  {
    id: 1,
    name: "feed the dog"
  },
  {
    id: 2,
    name: "Clean the living room"
  },
  {
    id: 3,
    name: "Change the oil the car"
  }
];



const router = createBrowserRouter([
  {
    path: "/",
    element: <TodosPage/>,
    loader: () => todos
  },
  {
    path: "/todo/:todoId",
    element: <TodoPage/>,
    loader: ({params}) => {
      const todoId = params.todoId;
      const todo = todos.find(todo => todo.id == parseInt(todoId));
      
      return todo;
    }
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
