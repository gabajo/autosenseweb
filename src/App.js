import { useState, useEffect } from "react"
import Map from "./components/Map"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewStationModal from "./components/NewStationModal";

const API = require("./API.js")

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stations, setStations] = useState()
  const plusIcon = <FontAwesomeIcon style={{ cursor: "pointer", position: "absolute", zIndex: "3", top: "1em", right: "1em", fontSize: "2em" }} onClick={openModal} icon={faPlusSquare} title="Edit" />;

  useEffect(() => {
    async function fetchData() {
      await API.getStations(setStations);
    }
    fetchData()
  }, []);


  function openModal() {

    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (

    <div>
      {plusIcon}
      <NewStationModal modalIsOpen={modalIsOpen} closeModal={closeModal} setStations={setStations} />

      <Map stations={stations} setStations={setStations} />
    </div>

  )
}

export default App;
