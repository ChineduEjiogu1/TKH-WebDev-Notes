import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function MyButton(props)
{

  console.log("is hovered on");
  const clickMe = (props) => {
    console.log("clicked");
  }

  return(<div>
    <button style= {{backgroundColor: props.color}} onClick={clickMe}>{props.name}</button>
  </div>);
}

function Whatever()
{
  return(<div>
    <p>Hello</p>
  </div>);
}

// function App() {
//   return(
//   <div>
//     <MyButton name="Hello Moto"
//     button={() => {console.log("clicked on button 1")}}
//     />
//     <MyButton name="This is clickable"
//     button={() => {console.log("clicked on button 2")}}
//     />
//     <Box />

//     <Whatever/>
//   </div>
//   )
  
// }


function Box(){
  const hovered = () => {
    console.log("is hovered on")
  }
  return (
    <div onMouseOver={hovered}>
      <p>This is a Box</p>
    </div>
  )
}

function DisplayPokemon(props){
  return (
    <li>{props.name}</li>
  )
}


function App() {
  const listOfPokemon = [
    "pikachu",
    "squirtle",
    "munchlax"
  ];
  return (
    <div>
      <MyButton color="red" name="Click this button"/>
      <MyButton color="blue" name="Click this button"/>
      <Box />
      <ul>
        {listOfPokemon.map(function(pokemon){
          return (
            <DisplayPokemon name={pokemon} />
          )
        })}
      </ul>
    </div>
  )
}


export default App