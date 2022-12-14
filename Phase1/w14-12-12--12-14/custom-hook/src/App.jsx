import { useState, useEffect } from 'react'
import axios from "axios";
import {useForm} from "react-hook-form"
import reactLogo from './assets/react.svg'
import './App.css'

function Login()
{
  const [ error, setError ] = useState(false);
  const {register, handleSubmit} = useForm();

  const handleLogin = (values) => {
   console.log(values);
    if(values.username == "user123" && values.password == "password123"){
      console.log("logged in");
      setError(false);
    } else {
      setError(true);
    }
  }


  return (
    <div>
      {
      error ? 
        <div>That was the wrong username and/or password</div> 
      : 
        <div>Welcome to the app</div>
      }
      <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register("username")} type="text" />
        <input {...register("password")} type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

const useAPI = (url) => 
{
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);
  const [shouldFetch, setFetch] = useState(false);

  const toggleFetch = () => setFetch(true);

  useEffect(() => {
    const fetchFromApi = async () => {
      try{
        const apiData = await axios.get(url);

        setLoading(false);
        setData(apiData.data);
        setFetch(false);

      }catch(e){
        console.log(e);
        setLoading(false);
        setError(true);
      }
    }

    if(shouldFetch)
    {
      fetchFromApi();
    }
  }, [data, url, shouldFetch])

  return {
    isLoading,
    isError,
    data,
    fetchData: toggleFetch
  }
}

function App() {

  const {isError, isLoading, data, fetchData} = useAPI("https://www.reddit.com/r/react.json");
  
  if(!isLoading && isError){
    return (
      <div>There was an error fetching data for you</div>
    )
  }

  return (
    <div>
    <Login />
      {/* <button onClick={() => fetchData()}>Call the API now</button>
      {
        !isLoading && data && (
          <>{JSON.stringify(data, null, 2)}</>
        )
      } */}
    </div>
  );
}

export default App
