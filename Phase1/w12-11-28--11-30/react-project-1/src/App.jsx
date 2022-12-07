import { Fragment, useState } from 'react'
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

let sampleData2 = [
  {
    title: "The Great Something",
    description: ""
  },
  {
    title: "",
    description: "eqwhljwhedklqjh"
  }
]

function ChangeColor() {
  //color is the state variable 
  //setColor is the function that updates color
  //useState is setting color's initial value to "red"
  const [color, setColor] = useState('red');

  return (
    //create a div to show color
    <div style={{ height: '50px', height: '50px', backgroundColor: color }}>
    {/* input takes in text from the user
      
      use onChange event to run setColor every time there is a change to the value typed into the input

      run setColor function to set the color of the div to the color the user typed in to the input which is e.target.value

    */}
      <input onChange={(e) => setColor(e.target.value)} type="text"></input>
    </div>
  );
}
 

function WelcomeComponent2(props)
{
  const [state, setNewState] = useState(0)

  let i = 0;
  console.log("i added to 1", i+1)
  i = i + 1;
  console.log("i after added to one", i);

  return (
    <div>
      {state}
      <button onClick={() => setNewState(state + 1)}>Increase</button>
    </div>
  )
}

// return (
//     <div>
//       {
//         sampleData.map(data => (
//           <div>
//             {
// //Nested Ternary Operator
//               data.title ? <div>{data.title}</div> : data.description ? <div>{data.description}</div> : <div></div>
//             }
//           </div>
//         ))
//       }
//     </div>
//   )

//Fragments
return (
  <Fragment>
    {/* <div>Div one</div>
    <div>Div two</div> */}
    {
      sampleData.map(data => (
        <div>{data.title}</div>
      ))
    }
  </Fragment>
)

//Shorthand
return (
  <>
    {/* <div>Div one</div>
    <div>Div two</div> */}
    {
      sampleData.map(data => (
        <div>{data.title}</div>
      ))
    }
  </>
)


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
      
      <ConditionalComponent showComponent1={true}/>

      <div className='list-of-youtube'>
      {sampleData.map(youtube => ( 
          <YoutubeComponent
          thumbnailImg={youtube.thumbnailImg}
          videoTitle={youtube.videoTitle}
          uploader={youtube.videoUploader}
          videoUploaded={youtube.dateVideoUploaded}
          videoViews={youtube.videoViews} />
          ))}
    </div> 
    <ChangeColor/>
    </div>
  );
  
}



//Old school
class WelcomeComponent extends React.Component {
  constructor(){
    // State here
    this.state = {

    }
  }

  componentDidMount(){
    //Api call
  }

  componentDidUpdate(){
    //when props or state changes
  }

  componentWillUnmount(){
    //What to do when removed
  }

  render(){
    return (
      <div>{this.props.whqjwhedlk}</div>
    )
  }
}
// New school
function WelcomeComponent(props){
  return (
    <div>{props.wjhqkljhwjskhd}</div>
  )
}

export default App