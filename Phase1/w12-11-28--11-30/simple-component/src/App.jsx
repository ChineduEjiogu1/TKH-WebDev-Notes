import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function MyButton()
{
  const clickMe = () => {
    console.log("Hello React!");
  }

  return(<button onClick={clickMe}>Click Me!</button>);
}

function App() {
  return(
  <div>
    <MyButton />
    <MyButton />
    <MyButton />
  </div>
  )
  
}



export default App
