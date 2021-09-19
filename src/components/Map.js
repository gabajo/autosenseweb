
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState } from "react"
import StationModal from "./StationModal"


export default function Map({ stations, setStations }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState();



  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <StationModal modalIsOpen={modalIsOpen} closeModal={closeModal} station={selectedStation} setStations={setStations} />


      <MapContainer
        style={{
          height: "100vh",
          zIndex: 1,
        }}
        center={
          [46.843254152584265, 8.251675870105307]
        }
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />



        {stations?.map((station, idx) => {
          return (
            <Marker
              eventHandlers={{
                click: (e) => {

                  openModal();
                  setSelectedStation(station)
                },
              }}
              key={idx}
              position={[station.latitude, station.longitude]}
            />


          );
        })}
      </MapContainer>
    </>
  )
}