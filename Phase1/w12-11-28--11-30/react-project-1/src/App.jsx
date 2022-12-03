import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let sampleData = [
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "He did WHAT?!?! (My intial reaction)",
    videoUploader: "MaxTongster",
    dateVideoUploaded: "10-31-2022",
    videoViews: 10
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
    videoUploader: "Dave Doughbrick",
    dateVideoUploaded: "11-02-2022",
    videoViews: 300000
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "React in 100 seconds",
    videoUploader: "Fireship",
    dateVideoUploaded: "2022-09-08",
    videoViews: 255
  }
];

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
        <p>{props.videoViews}</p>
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
      <YoutubeComponent 
      thumbnailImg={sampleData[0].thumbnailImg}
      videoTitle={sampleData[0].videoTitle}
      uploader={sampleData[0].videoUploader}
      videoUploaded={sampleData[0].dateVideoUploaded}
      videoViews={sampleData[0].videoViews}/>
      <YoutubeComponent 
      thumbnailImg={sampleData[1].thumbnailImg}
      videoTitle={sampleData[1].videoTitle}
      uploader={sampleData[1].videoUploader}
      videoUploaded={sampleData[1].dateVideoUploaded}
      videoViews={sampleData[1].videoViews}/>
      <YoutubeComponent 
      thumbnailImg={sampleData[2].thumbnailImg}
      videoTitle={sampleData[2].videoTitle}
      uploader={sampleData[2].videoUploader}
      videoUploaded={sampleData[2].dateVideoUploaded}
      videoViews={sampleData[2].videoViews}/>

      <ul>
        <li>
          {listOfPokemon.find(pokemon => pokemon === "Pikachu")}
        </li>
      
        {listOfPokemon.map(pokemon => (
          <li>{pokemon}</li>
        ))}
        
      </ul>
        {sampleData.map(youtube => ( 
          <div className='container'> 
            <img src={youtube.thumbnailImg}/> 
            <div className='content'>
              <p>{youtube.videoTitle}</p> 
              <p>{youtube.videoUploader}</p>
              <p>{youtube.dateVideoUploaded}</p> 
              <p>{youtube.videoViews}</p>
          </div> 
        </div>))}
      <ConditionalComponent showComponent1={true}/>

    </div>   
  );
  
}

export default App