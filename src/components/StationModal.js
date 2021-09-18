import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ProductContent from "./ProductContent"

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

export default function StationModal({ modalIsOpen, closeModal, station }) {


  return (
    <div>

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 style={{ marginBottom: "0.2em" }} >{station?.name}</h3>
          <div>{station?.address}, {station?.city}</div>

          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {station?.products.map((product, idx) => {
              return (
                <ProductContent key={idx} idx={idx} product={product} prices={station.prices} />
              )

            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}