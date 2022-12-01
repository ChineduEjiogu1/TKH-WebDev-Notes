import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function ConditionalComponent(props)
{
  return (
    <div>
      {props.showComponent1 ? 
        <div>Component 1</div>
      :
        <div>Component 2</div>
      }
    </div>
  )
}

function YoutubeComponent(props)
{
  return (
    <div className="container">
      <img src={props.thumbnailImg} />
      <div className='content'>
        <p>{props.videoTitle}</p>
        <p>{props.uploader}</p>
        <p>{props.videoUploaded}</p>
      </div>
    </div>
  )
}

function App() 
{
  
  const listOfPokemon = [
    "Pikachu",
    "Drangonite",
    "Gyrados"
  ];
  return (
    <div className="app-container">
      <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
      videoTitle="Why a cheeseburger"
      uploader="Mark"
      videoUploaded="11/30/2022"/>
      <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
      videoTitle="Luis' big break"
      uploader="Luis"
      videoUploaded="11/30/2022"/>
      <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
      videoTitle="How to make a taco"
      uploader="CookingFoods"
      videoUploaded="11/28/2022"/>
      <ul>
        <li>
          {listOfPokemon.find(pokemon => pokemon === "Pikachu")}
          </li>
      
        {listOfPokemon.map(pokemon => (
          <li>{pokemon}</li>
        ))}
      </ul>
      <ConditionalComponent showComponent1={true}/>
    </div>
  )
}

export default App
