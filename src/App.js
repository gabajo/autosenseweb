import {useState, useEffect} from "react"
import Map from "./components/Map"
const API= require("./API.js")

function App() {


      const [stations, setStations] = useState()

   useEffect(() => {

    async function fetchData() {
  
      await API.getStations(setStations);

    }
    fetchData()

    

  }, []);

  return (
   
  <Map stations={stations} />
  )
}

export default App;
