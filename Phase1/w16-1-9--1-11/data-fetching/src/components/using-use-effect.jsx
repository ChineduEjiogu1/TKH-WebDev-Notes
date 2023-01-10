//using-use-effect.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsingUseEffect() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/ditto"
        );
        console.log(apiData);
        setApiData(apiData.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  if (apiData) {
    return <div>Got Data</div>;
  } else {
    return <div>I think we are still working on getting data</div>;
  }
}