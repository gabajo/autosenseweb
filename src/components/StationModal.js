import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductContent from "./ProductContent"
import EditableField from './EditableField';
import BaseModal from './BaseModal';
import Typography from '@mui/material/Typography';

const API = require("../API.js")




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function StationModal({ modalIsOpen, closeModal, setProducts, products, station, stations, setStations }) {


  const trashIcon = <FontAwesomeIcon style={{ cursor: "pointer", float: "right" }} onClick={handleDelete} icon={faTrash} title="Delete Station" />;

  function handleDelete() {

    API.deleteStation(station.station_id, setStations, stations)
    closeModal()

  }

  const [val, setVal] = useState()

  function onSubmit() {
    API.editStationName(station.stationId, setStations, stations, { val })
  }

  useEffect(() => {
    setVal(station?.name)
  }, [station?.name])

  return (
    <div>

      <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h5" component="h2"><EditableField val={val} setVal={setVal} onSubmit={onSubmit} /></Typography>
          <Typography variant="h6" component="h2">{station?.address}, {station?.city}</Typography>

          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {products?.map((product, idx) => {
              return (
                <ProductContent key={idx} product={product} prices={station.prices} setProducts={setProducts} stationId={station.station_id} />
              )

            })}


          </div>
          {trashIcon}
        </Box>
      </BaseModal>
    </div>
  );
}