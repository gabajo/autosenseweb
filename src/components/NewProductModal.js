import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductContent from "./ProductContent"
import EditableField from './EditableField';
import BaseModal from './BaseModal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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

export default function NewProductModal({ modalIsOpen, closeModal, products, setProducts }) {


    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const checkIcon = <FontAwesomeIcon style={{ height: "100%" }} icon={faCheck} />;

    const [points, setPoints] = useState([])
    const [addingPoint, setAddingPoint] = useState(false)
    // const [point, setPoint] = useState()
    let point = {};
    let product = {};
    function addPoint() {
        if (point.availability) {
            point.id = points.length + 1
            setPoints(points => [...points, point])
            setAddingPoint(false)
        }
    }


    function saveProduct() {
        product.points = points
        setProducts(products => [...products, product])
        closeModal()
    }


    const NewPoint = () => {
        return (
            <>
                <Grid item xs={5}>
                    <Item><TextField label="Point id" readOnly value={points.length + 1} variant="standard" onChange={(e) => point.id = e.target.value} /></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item><TextField label="Availability" required variant="standard" onChange={(e) => point.availability = e.target.value} /></Item>
                </Grid>
                <Grid item xs={2}>
                    <Item onClick={addPoint} style={{ height: "75%", cursor: "pointer" }} title="Save point">{checkIcon}</Item>
                </Grid>
            </>)
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">New Product</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item><TextField style={{ width: "100%" }} label="Product id" variant="standard" onChange={(e) => product.id = e.target.value} /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="Price" variant="standard" onChange={(e) => product.price = e.target.value} /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField label="Currency" variant="standard" onChange={(e) => product.currency = e.target.value} /></Item>
                        </Grid>

                        <Grid item xs={10}>
                            <Item>Points</Item>

                        </Grid>
                        <Grid item xs={2}>
                            <Item title="Add a point" style={{ cursor: "pointer" }} onClick={() => setAddingPoint(true)}>{plusIcon}</Item>
                        </Grid>


                        {addingPoint ? <NewPoint /> : <></>}

                        {points?.map((point) => {
                            return (
                                < >
                                    <Grid item xs={6} key={points.length}>
                                        <Item>{point.id}</Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>{point.availability}</Item>
                                    </Grid>
                                </>
                            );
                        })}



                        <Grid item xs={12}>
                            <Item title="Save product" style={{ cursor: "pointer" }} onClick={saveProduct}>{checkIcon}</Item>
                        </Grid>
                    </Grid>
                </Box>
            </BaseModal>
        </div >
    );
}