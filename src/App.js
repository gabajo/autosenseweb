import { useState } from "react"
import Map from "./components/Map"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewStationModal from "./components/NewStationModal";
import { Toaster } from "react-hot-toast";


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stations, setStations] = useState()
  const plusIcon = <FontAwesomeIcon style={{ cursor: "pointer", position: "absolute", zIndex: "3", top: "1em", right: "1em", fontSize: "2em" }} onClick={openModal} icon={faPlusSquare} title="Edit" />;




  function openModal() {

    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (

    <div>
      <Toaster reverseOrder={false} />
      {plusIcon}
      <NewStationModal modalIsOpen={modalIsOpen} closeModal={closeModal} setStations={setStations} />

      <Map stations={stations} setStations={setStations} />
    </div>

  )
}

export default App;
