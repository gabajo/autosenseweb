import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductContent from "./ProductContent"
import EditableField from './EditableField';
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

    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])

    function openProductModal() {
        setProoductModalIsOpen(true);
    }

    function closeProductModal() {
        setProoductModalIsOpen(false);
    }


    console.log("product");
    console.log(product);

    // function handleDelete() {

    //     API.deleteStation(station.id, setStations)
    //     closeModal()

    // }

    // const [val, setVal] = useState()

    // function onSubmit() {
    //     API.editStationName(station?.id, setStations, { val })
    // }

    // useEffect(() => {
    //     setVal(station?.name)
    // }, [station?.name])
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
                            <Item><TextField style={{ width: "100%" }} label="Name" variant="standard" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="Address" variant="standard" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="City" variant="standard" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="Latitude" variant="standard" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="Longitude" variant="standard" /></Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item>Products</Item>

                        </Grid>
                        <Grid item xs={2}>
                            <Item style={{ cursor: "pointer" }} onClick={openProductModal} title="Add a product" >{plusIcon}</Item>
                        </Grid>


                        {products?.map((product) => {
                            return (
                                < >
                                    <Grid item xs={6} key={products.length}>
                                        <Item>{product.id}</Item>
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <Item>{point.availability}</Item>
                                    </Grid> */}
                                </>
                            );
                        })}


                    </Grid>

                </Box>
            </BaseModal>
            <NewProductModal modalIsOpen={productModalIsOpen} closeModal={closeProductModal} products={products} setProducts={setProducts} />
        </div >
    );
}