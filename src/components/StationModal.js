import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductContent from "./ProductContent"
import EditableField from './EditableField';
import BaseModal from './BaseModal';

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

export default function StationModal({ modalIsOpen, closeModal, station, setStations }) {


  const trashIcon = <FontAwesomeIcon style={{ cursor: "pointer", float: "right" }} onClick={handleDelete} icon={faTrash} title="Delete Station" />;

  function handleDelete() {

    API.deleteStation(station.id, setStations)
    closeModal()

  }

  const [val, setVal] = useState()

  function onSubmit() {
    API.editStationName(station?.id, setStations, { val })
  }

  useEffect(() => {
    setVal(station?.name)
  }, [station?.name])

  return (
    <div>

      <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <Box sx={style}>

          <h3 style={{ marginBottom: "0.2em", marginTop: "0.2em" }} ><EditableField val={val} setVal={setVal} onSubmit={onSubmit} /></h3>
          <h5 style={{ marginBottom: "1em", marginTop: "0.2em" }}>{station?.address}, {station?.city}</h5>

          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {station?.products.map((product, idx) => {
              return (
                <ProductContent key={idx} product={product} prices={station.prices} setStations={setStations} stationId={station?.id} />
              )

            })}


          </div>
          {trashIcon}
        </Box>
      </BaseModal>
    </div>
  );
}