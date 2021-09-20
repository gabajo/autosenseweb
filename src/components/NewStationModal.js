import { useState } from 'react';
import Box from '@mui/material/Box';
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import BaseModal from './BaseModal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NewProductModal from './NewProductModal';

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

export default function NewStationModal({ modalIsOpen, closeModal, setStations }) {

    const [productModalIsOpen, setProoductModalIsOpen] = useState(false);
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const checkIcon = <FontAwesomeIcon icon={faCheck} />;


    const [products, setProducts] = useState([])

    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    function openProductModal() {
        setProoductModalIsOpen(true);
    }

    function closeProductModal() {
        setProoductModalIsOpen(false);
    }


    // console.log("products");
    // console.log(products);

    function saveStation() {
        let station = {}
        station.name = name
        station.address = address
        station.city = city
        station.latitude = latitude
        station.longitude = longitude
        station.products = products
        console.log("save");

        API.saveStation(station, setStations)

        closeModal()

    }


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>

            <BaseModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">Create a new station</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField style={{ width: "100%" }} label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Address" variant="standard" onChange={(e) => setAddress(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="City" variant="standard" onChange={(e) => setCity(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Latitude" variant="standard" onChange={(e) => setLatitude(e.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Longitude" variant="standard" onChange={(e) => setLongitude(e.target.value)} />
                        </Grid>
                        <Grid item xs={10}>
                            <h3>Products</h3>

                        </Grid>
                        <Grid item xs={2}>
                            <Item style={{ cursor: "pointer" }} onClick={openProductModal} title="Add a product" >{plusIcon}</Item>
                        </Grid>


                        {products?.map((product) => {
                            return (
                                < >
                                    <Grid item xs={12} key={products.length}>
                                        <Typography id="modal-modal-title" variant="body1" >Product: {product.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6} key={products.length + 1}>
                                        <Typography id="modal-modal-title" variant="body1" >Price: {product.price}</Typography>
                                    </Grid>
                                    <Grid item xs={6} key={products.length + 2}>
                                        <Typography id="modal-modal-title" variant="body1" >Currency: {product.currency}</Typography>
                                    </Grid>

                                    {product.points.map((point) => {
                                        return (
                                            <>
                                                <Grid item xs={2} key={products.length}>
                                                    <Typography id="modal-modal-title" variant="body1" >{point.id}</Typography>
                                                </Grid>
                                                <Grid item xs={2} key={products.length + 1}>
                                                    <Typography id="modal-modal-title" variant="body1" >{point.availability}</Typography>
                                                </Grid>
                                            </>
                                        )
                                    })}


                                </>
                            );
                        })}

                        <Grid item xs={12}>
                            <Item title="Save Station" style={{ cursor: "pointer" }} onClick={saveStation}>{checkIcon}</Item>
                        </Grid>
                    </Grid>

                </Box>
            </BaseModal>
            <NewProductModal modalIsOpen={productModalIsOpen} closeModal={closeProductModal} products={products} setProducts={setProducts} />
        </div >
    );
}