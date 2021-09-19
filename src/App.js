import { useState, useEffect } from "react"
import Map from "./components/Map"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { positions } from "@mui/system";
const API = require("./API.js")

function App() {

  const plusIcon = <FontAwesomeIcon style={{ cursor: "pointer", position: "absolute", zIndex: "3", top: "1em", right: "1em", fontSize: "2em" }} icon={faPlusSquare} title="Edit" />;
  const [stations, setStations] = useState()

  useEffect(() => {

    async function fetchData() {

      await API.getStations(setStations);

    }
    fetchData()



  }, []);




  return (

    <div>
      {plusIcon}
      <Map stations={stations} setStations={setStations} />
    </div>

  )
}

export default App;
